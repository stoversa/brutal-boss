import React from 'react'
import Tableheader from "./Subcomponents/Tableheader"
import Tablerow from "./Subcomponents/Tablerow"
import axios from "axios";
import './currentMeeting.css';

class Review extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      meetingId: "",
      ended: true,
      commentBy: "?",
      commentAbout: "?",
      rating: "",
      comment: "",
      availableUsers: [
        {
          userId: 1,
          name: "Tony"
        },
        {
          userId: 2,
          name: "Dawn"
        },
        {
          userId: 3,
          name: "Greg"
        },
        {
          userId: 4,
          name: "Ryan"
        },
        {
          userId: 5,
          name: "Jess"
        },
        {
          userId: 6,
          name: "Sam"
        }]
    }

    this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }
//eventually make this state

  componentWillMount() {
    
    let url = new URL (window.location.href);
    let qryVal = url.searchParams.get("id");
    if (qryVal) {
    axios.get("/api/meetings/" + qryVal)
      .then(res => this.setState({
        ended: res.data.ended,
        meetingId: qryVal
      }))
      // .then(res => this.props.history.push("/meetings")) // redirect to home page
      .catch(err => console.log(err));
    // this.setState({ mode });
    }
    else {
      console.log("Not active meeting");
    };
  }

  handleChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  }
  
  logThis = (event) => {
    this.setState({
      commentAbout: event.target.getAttribute('data'),
      commentBy: event.target.parentElement.getAttribute('data')
    });
  }

  recordRating = event => {
    this.setState({ rating: event.target.value });
    console.log(this.state.rating);
  }

  submitRating = event => {
    axios.post("/api/comments/", {
      meetingId: this.state.meetingId,
      commentBy: this.state.commentBy,
      commentAbout: this.state.commentAbout,
      rating: this.state.rating,
      comment: this.state.comment
    })
      .then(res => {
        console.log(res.data._id);
        this.addComment(res.data._id);
      })
      .catch(err => console.log(err));
  }

  addComment = id => {
    console.log("meetingid: " + this.state.meetingId);
    let update = { $push: { comments: id } }
    axios.put("/api/meetings/" + this.state.meetingId, update)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render () {
    if (this.props.user && !this.state.ended) {
    return (
      <div className="table-responsive col-11">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th></th>
              {this.state.availableUsers.map(user => (
                <Tableheader name={user.name} photo={user.photo} key={user.name+"header"}/>
              ))}
            </tr>
          </thead>
          <tbody>
              {this.state.availableUsers.map(user => (
              <Tablerow name={user.name} photo={user.photo} availableUsers={this.state.availableUsers} logThis={this.logThis}/>
              ))}
          </tbody>
        </table>
          <div className="modal fade" id="meetingmodal" tabIndex="-1" role="dialog" aria-labelledby="meetingmodalTitle" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="meetingmodalTitle">Please provide a rating for {this.state.commentAbout}</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                 <div className="row">
                  <div className="col-12">
                    <div className="text-center">Rating</div>
                    <ul className="list-group">
                      <li className="text-center list-group-item list-group-item-action list-group-item-primary" value="10" onClick={this.recordRating}>10</li>
                      <li className="text-center list-group-item list-group-item-action list-group-item-primary" value="9" onClick={this.recordRating}>9</li>
                      <li className="text-center list-group-item list-group-item-action list-group-item-info" value="8" onClick={this.recordRating}>8</li>
                      <li className="text-center list-group-item list-group-item-action list-group-item-info" value="7" onClick={this.recordRating}>7</li>
                      <li className="text-center list-group-item list-group-item-action list-group-item-info" value="6" onClick={this.recordRating}>6</li>
                      <li className="text-center list-group-item list-group-item-action list-group-item-light" value="5" onClick={this.recordRating}>5</li>
                      <li className="text-center list-group-item list-group-item-action list-group-item-warning" value="4" onClick={this.recordRating}>4</li>
                      <li className="text-center list-group-item list-group-item-action list-group-item-warning" value="3" onClick={this.recordRating}>3</li>
                      <li className="text-center list-group-item list-group-item-action list-group-item-danger" value="2" onClick={this.recordRating}>2</li>
                      <li className="text-center list-group-item list-group-item-action list-group-item-danger" value="1" onClick={this.recordRating}>1</li>
                    </ul>
                  </div>
                 </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Cancel</button>
                  <button className="btn btn-outline-success btn-block" onClick={this.submitRating} data-dismiss="modal">Submit</button>
                </div>
              </div>
            </div>
        </div>
      </div>
    )
  } 
  else if (this.state.ended){
    return (
      <div className="Review">
        <p>This meeting is currently unavailable or has ended. Please contact your meeting coordinator if you feel this is an error</p>
      </div>
    )
  }
  else {
    return (
      <div className="Review">
        <p>Sorry, you really need to be logged in for this page.</p>
      </div>
    )
  }
}
}
export default Review;