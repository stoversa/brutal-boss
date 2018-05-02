import React from "react";
import axios from "axios";
import {Bar, Line, Pie} from 'react-chartjs-2';



class MeetingDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charData: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [{
          label: "Dataset #1",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 2,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [65, 59, 20, 81, 56, 55, 40],
        }]
      }
    };
  }
  // When this component mounts, grab the meeting with the _id of this.props.match.params.id
  // e.g. localhost:3000/meetings/599dcb67f0f16317844583fc
  componentDidMount() {
    axios.get(this.props.match.params.id)
      .then(res => console.log(res))
      // .then(res => this.setState({ meeting: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
        <div className="MeetingDetails">
          <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Join a Meeting</h5>
                  <Bar
                    data={this.state.charData}
                    options={{
                      maintainAspectRatio: false
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
