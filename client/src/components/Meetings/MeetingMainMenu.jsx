import React from 'react';
import axios from "axios";

class MeetingMainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      createdBy: "",
      eventDate: "",
      location: "",
      searchedMeetingId: "",
      searchedCreatedBy: "",
      searchedEventDate: "",
      searchedLocation: "",
      returnedResults: false
    };
  }
  componentDidMount() {
    axios.get('/auth/user').then(response => {
      if (!!response.data.user) {
        this.setState({
          loggedIn: true,
          user: response.data.user,
          createdBy: response.data.user._id
        })
      } else {
        this.setState({
          loggedIn: false,
          user: null
        })
      }
    })
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    if (this.state.eventDate && this.state.location) {
      this.setState({
        isValid: true
      });
      console.log(this.state.user)
      axios.post("/api/meetings", this.state)
        .then(res => {
          console.log(this.state);
          this.setState({ meetingID: res.data._id });
      })
        .catch(err => console.log(err));
    }
    else {
      this.setState({
        isValid: false
      });
    }
    this.setState({
      isValid: true,
      createdBy: "",
      eventDate: "",
      location: ""
    });
  }

  onSearch = (e) => {
    e.preventDefault();
    if (this.state.searchedMeetingId) {
      this.setState({
        isValid: true
      });
      axios.get("/api/meetings/" + this.state.searchedMeetingId)
        // .then(res => console.log(res))5ae9008a629a2e4b622030e2
        .then(res => this.setState({
          returnedResults: true,
          searchedMeetingId: res.data._id,
          searchedCreatedBy: res.data._id,
          searchedEventDate: res.data.eventDate,
          searchedLocation: res.data.location
        }))
        .catch(err => this.setState({
          returnedResults: false
        }));
    }
    else {
      this.setState({
        isValid: false
      });
    }
    console.log(this.state.searchResults);
  }

  render() {
    if (this.state.user) {
      return (
        <div>
          <div className="Home">
            <h1> Brutal Boss </h1>
          </div>
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
                        name="searchedMeetingId"
                        id="searchedMeetingId"
                        value={this.state.searchedMeetingId}
                        onChange={this.onChange}
                        placeholder="ABC123@"
                      />
                      <button type="submit" className="btn btn-primary" onClick={this.onSearch} id="meetingSearch">Search</button>
                    </div>
                  </div>
                </div>
                {this.state.returnedResults ? (
                  <div className="col-sm-8">

                    <div className="list-group-item list-group-item-action flex-column align-items-start">
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{this.state.searchedLocation}</h5>
                        <small className="text-muted">{this.state.searchedEventDate}</small>
                      </div>
                      <a href={"/current/?id=" + this.state.searchedMeetingId}><strong>Join Meeting</strong></a>
                      <p className="text-muted">Created by: {this.state.searchedCreatedBy}</p>
                    </div>
                  </div>) : (
                    <h3>No Results to Display</h3>
                  )}
              </div>
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Create a Meeting</h5>
                    <form id="createMeetingForm">
                      <div className="form-group">
                        <label htmlFor="createdBy">Created By</label>
                        <input
                          type="text"
                          className="form-control"
                          name="createdBy"
                          id="createdBy"
                          value={this.state.user._id}
                          onChange={this.onChange}
                          placeholder={this.state.user.local.username}
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
                      {this.state.meetingID ? <div><a href={"/current/?id=" + this.state.meetingID}><strong>Here</strong></a><p>/current/?id={this.state.meetingID}</p></div> : <p>Sorry we weren't able to create a meeting for you.</p>}

                      <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="absoluteFooter font-small blue">
            <div className="footer-copyright py-3 text-center">
              © 2018 Copyright:
       				 <a className="coolKids"> The Cool Kids </a>
            </div>
          </footer>
        </div>
      )
    } else {
      return (
        <div>

          <div className="Home">
            <h1> Brutal Boss </h1>
          </div>
          <div className="MeetingMainMenu">
            <br />
            <h1> Join or Create a Meeting </h1>
            <br />
            <p className="sorry">Sorry, you really need to be <a href="/">logged in</a> for this page.</p>
          </div>
          <footer className="absoluteFooter font-small blue">
            <div className="footer-copyright py-3 text-center">
              © 2018 Copyright:
       				 <a className="coolKids"> The Cool Kids </a>
            </div>
          </footer>
        </div>
      )
    }
  }
}
export default MeetingMainMenu;