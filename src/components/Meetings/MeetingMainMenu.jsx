import React from 'react';
import axios from "axios";

class MeetingMainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      searchMeetingId: "",
      createdBy: "",
      speaker: "",
      eventDate: "",
      location: ""
    };
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onSubmit = (e) => {
    e.preventDefault();
    if ( this.state.speaker && this.state.eventDate && this.state.location) {
      this.setState({
        isValid: true,
        createdBy: "",
        speaker: "",
        eventDate: "",
        location: ""
      });
      console.log(this.state)
      axios.post("/api/meetings", this.state)
        .then(res => console.log(res.data._id))
        // .then(res => this.props.history.push("/")) // redirect to home page
        .catch(err => console.log(err));

    }
    else {
      this.setState({
        isValid: false
      });
    }
  }

  onSearch = (e) => {
    e.preventDefault();
    if (this.state.searchMeetingId) {
      this.setState({
        isValid: true
      });
      axios.get("/api/meetings/" + this.state.searchMeetingId)
        .then(res => console.log(res))
        // .then(res => this.props.history.push("/meetings")) // redirect to home page
        .catch(err => console.log(err));
    }
    else {
      this.setState({
        isValid: false
      });
    }
  }

  render() {
    if (2) {
      return (
        <div className="MeetingMainMenu">
          <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Join a Meeting</h5>
                  <div className="form-group">
                    <input 
                      type="text" 
                      className="form-control" 
                      name="searchMeetingId" 
                      id="searchMeetingId" 
                      value={this.state.searchMeetingId} 
                      onChange={this.onChange} 
                      placeholder="ABC123@" 
                    />
                    <button type="submit" className="btn btn-primary" onClick={this.onSearch} id="meetingSearch">Search</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Create a Meeting</h5>
                  <form id="createMeetingForm">
                    <div className="form-group">
                    </div>
                    <div className="form-group">
                      <label htmlFor="createdBy">Created By</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        name="createdBy" 
                        id="createdBy" 
                        value={this.state.createdBy} 
                        onChange={this.onChange} 
                        placeholder="Grace" 
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="speakers">Speaker</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        name="speaker" 
                        id="speaker" 
                        value={this.state.speaker} 
                        onChange={this.onChange} 
                        placeholder="John"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="eventDate">Event Date</label>
                      <input 
                        type="date" 
                        className="form-control" 
                        name="eventDate" 
                        id="eventDate" 
                        value={this.state.eventDate} 
                        onChange={this.onChange} 
                        placeholder="MM-DD-YYYY"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="location">Location or Platform</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        name="location" 
                        id="location" 
                        value={this.state.location} 
                        onChange={this.onChange} 
                        placeholder="Location or Platform"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="MeetingMainMenu">
          <p>Sorry, you really need to be <a href="/">logged in</a> for this page.</p>
        </div>
      )
    }
  }
}
  export default MeetingMainMenu;