import React from "react";
import axios from "axios";
import { Bar } from 'react-chartjs-2';

class MeetingDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meetingId: "",
      ended: "",
      resLabel: [],
      resData: [],
      charData: {}
    };
  }
  // When this component mounts, grab the meeting with the _id of this.props.match.params.id
  // e.g. localhost:3000/meetings/599dcb67f0f16317844583fc
  componentWillMount() {
    let url = new URL (window.location.href);
    let qryVal = url.searchParams.get("id");
    if (qryVal) {
    axios.get("/api/meetings/" + qryVal)
      .then(res => {
        const comments = res.data.comments;
        comments.map(comment => {
          this.setState({ resData: [...this.state.resData, comment.rating] })
        })
        comments.map(comment => {
          this.setState({ resLabel: [...this.state.resLabel, comment.commentAbout] });
        })
        this.setState({charData:{
          labels: this.state.resLabel,
          datasets: [{
            label: "Dataset #1",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 2,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: this.state.resData
          }]
        }})
      })
      // .then(() => this.state.resData.shift())
      .catch(err => console.log(err));
    // this.setState({ mode });
    }
    else {
      console.log("Not active meeting");
    };
    console.log(this.state.resData);
  }

  render() {
    return (
        <div className="chart">
          <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                <h5 className="card-title">Meeting Results</h5>
                <Bar
                  data={this.state.charData}
                  //dynamically rendered graph will not start at zero unless specified
                  options={{
                    scales: {
                      yAxes: [{
                        ticks: {
                          beginAtZero: true
                      }
                    }]
                  }
                  }}
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MeetingDetail;
