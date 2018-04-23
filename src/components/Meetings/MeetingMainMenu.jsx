import React from 'react'
import { Link } from 'react-router-dom'
// TODO - add proptypes

const MeetingMainMenu = props => {
  if (props.user) {
    return (
      <div className="MeetingMainMenu">
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Join a Meeting</h5>
                <input className="form-control" type="text" placeholder="Meeting ID"/>
                <Link to="/join-meeting" className="btn btn-primary">
                  Let's Go
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Create a Meeting</h5>
                <form>
                  <div className="form-group">
                    <label htmlFor="speakers">Speaker</label>
                    <input type="text" className="form-control" id="speakers" placeholder="John Smith"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="eventDate">Event Date</label>
                    <input type="date" className="form-control" id="eventDate" placeholder="MM-DD-YYYY"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="location">Location or Platform</label>
                    <input type="text" className="form-control" id="location" placeholder="Location or Platform"/>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
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

export default MeetingMainMenu