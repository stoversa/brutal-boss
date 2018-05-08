import React from 'react'
import Tableheader from "./Subcomponents/Tableheader"
import Tablerow from "./Subcomponents/Tablerow"
import Modal from "./Subcomponents/Modal"
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
  
  logThis = event => {
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

  updateTd = () => {
    let selected = document.getElementById("selected");
    switch (this.state.rating) {
      case '1':
        selected.className.add("bg-danger");
        break;
      case '2':
        selected.classList.add("bg-danger");
        break;
      case '3':
        selected.classList.add("bg-warning");
        break;
      case '4':
        selected.classList.add("bg-warning");
        break;
      case '5':
        selected.classList.add("bg-light");
        break;
      case '6':
        selected.classList.add("bg-info");
        break;
      case '7':
        selected.classList.add("bg-info");
        break;
      case '8':
        selected.classList.add("bg-info");
        break;
      case '9':
        selected.classList.add("bg-danger");
        break;
      case '10':
        selected.classList.add("bg-primary");
        break;
      default:
        selected.classList.add("bg-primary");
    }
  }

  addComment = id => {
    console.log("meetingid: " + this.state.meetingId);
    let update = { $push: { comments: id } }
    axios.put("/api/meetings/" + this.state.meetingId, update)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  endMeeting = id => {
    let update = { ended: true }
    axios.put("/api/meetings/" + this.state.meetingId, update)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  render () {
    if (this.props.user && !this.state.ended) {
    return (
      <div className="table-responsive col-11">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th><a className="btn btn-primary" href={"/meeting-details/?id=" + this.state.meetingId} onClick={this.endMeeting}>End Meeting</a></th>
              {this.state.availableUsers.map(user => (
                <Tableheader name={user.name} photo={user.photo} key={user.name+"header"}/>
              ))}
            </tr>
          </thead>
          <tbody>
              {this.state.availableUsers.map(user => (
              <Tablerow key={user.name+"row"} name={user.name} photo={user.photo} availableUsers={this.state.availableUsers} logThis={this.logThis}/>
              ))}
          </tbody>
        </table>
        <Modal commentAbout={this.state.commentAbout} recordRating={this.recordRating} submitRating={this.submitRating}/>
        <footer className="homeFooter font-small blue">
					<div className="footer-copyright py-3 text-center">
						© 2018 Copyright:
       				 <a> The Cool Kids </a>
					</div>
				</footer>
      </div>
    )
  } 
  else if (this.state.ended){
    return (
      <div>
         <div className="Home">
					<h1> Brutal Boss </h1>
				</div>
      <div className="Review">
        <p>This meeting is currently unavailable or has ended. Please contact your meeting coordinator if you feel this is an error</p>
      </div>
      <footer className="homeFooter font-small blue">
					<div className="footer-copyright py-3 text-center">
						© 2018 Copyright:
       				 <a> The Cool Kids </a>
					</div>
				</footer>
      </div>
    )
  }
  else {
    return (
      <div>
      <div className="Review">
        <p>Sorry, you really need to be logged in for this page.</p>
      </div>
      <footer className="homeFooter font-small blue">
					<div className="footer-copyright py-3 text-center">
						© 2018 Copyright:
       				 <a> The Cool Kids </a>
					</div>
				</footer>
      </div>
    )
  }
}
}
export default Review;
