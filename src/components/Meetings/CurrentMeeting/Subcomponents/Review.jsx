import React from 'react'
import axios from "axios";

class Review extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      meetingId: "5ae216695497bc3276368b83",
      commentBy: "?",
      commentAbout: "?",
      rating: "",
      comment: ""
    }

    this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
    }

    recordRating = event =>{
      this.setState({rating: event.target.value});
      console.log(this.state.rating);
    }

    handleChange = event => {
      // Getting the value and name of the input which triggered the change
      let value = event.target.value;
      const name = event.target.name;
      console.log(value);
      // Updating the input's state
      this.setState({
        [name]: value
      });
    }

    submitRating = event => {
      axios.post("/api/comments", this.state)
        .then(res => {
          res => console.log(res)
          // axios.put(`/api/meeting/${this.state.meetingId}`, { comments: res._id })
          //   .then(res => console.log(res))
          //   .catch(err => console.log(err));
        })
        // .then(res => this.props.history.push("/meetings")) // redirect to home page
        .catch(err => console.log(err));
    }

  render ()  {
    return (
      <div className="container-fluid bg-light">
        <div className="row">
          <div className="col-xl-1 col-md-2">
            <button type="button" className="btn btn-outline-secondary btn-block">Cancel</button>
          </div>
          <div className="col-xl-10 col-md-8 d-none d-sm-block">
            <h3 className="text-center">Create a New Review</h3>
          </div>
          <div className="col-xl-1 col-md-2">
            <button className="btn btn-outline-success btn-block" onClick={this.submitRating}>Submit</button>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-9 col-md-7 bg-white">
            <div className="row">
              <form className="col-12 bg-light">
                <div className="form-group">
                  <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Find a Tag" />
                </div>
              </form>
            </div>
            <div className="row">
              <div className="col-4 text-left">
                Sample Terms go here
                <br />Lorem ipsum dolor sit amet,
                <br />consectetur adipiscing elit,
                <br />sed do eiusmod tempor incididunt
                <br />ut labore et dolore magna aliqua.
                <br />Ut enim ad minim veniam,
                <br />quis nostrud exercitation ullamco
                <br />laboris nisi ut aliquip ex ea commodo consequat.
                <br />Duis aute irure dolor in reprehenderit
                <br />in voluptate velit esse cillum dolore
                <br />eu fugiat nulla pariatur.
                <br />Excepteur sint occaecat cupidatat non proident,
                <br />sunt in culpa qui officia deserunt
                <br /> mollit anim id est laborum
        </div>
              <div className="col-4 text-left">
                And here
                <br />Lorem ipsum dolor sit amet,
                <br />consectetur adipiscing elit,
                <br />sed do eiusmod tempor incididunt
                <br />ut labore et dolore magna aliqua.
                <br />Ut enim ad minim veniam,
                <br />quis nostrud exercitation ullamco
                <br />laboris nisi ut aliquip ex ea commodo consequat.
                <br />Duis aute irure dolor in reprehenderit
                <br />in voluptate velit esse cillum dolore
                <br />eu fugiat nulla pariatur.
                <br />Excepteur sint occaecat cupidatat non proident,
                <br />sunt in culpa qui officia deserunt
                <br /> mollit anim id est laborum
        </div>
              <div className="col-4 text-left">
                And here
                <br />Lorem ipsum dolor sit amet,
                <br />consectetur adipiscing elit,
                <br />sed do eiusmod tempor incididunt
                <br />ut labore et dolore magna aliqua.
                <br />Ut enim ad minim veniam,
                <br />quis nostrud exercitation ullamco
                <br />laboris nisi ut aliquip ex ea commodo consequat.
                <br />Duis aute irure dolor in reprehenderit
                <br />in voluptate velit esse cillum dolore
                <br />eu fugiat nulla pariatur.
                <br />Excepteur sint occaecat cupidatat non proident,
                <br />sunt in culpa qui officia deserunt
                <br /> mollit anim id est laborum
        </div>
            </div>
            <div className="row">
              <form className="col-12 bg-light">
                <div className="form-group">
                  <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control" id="commentHelp" name="comment" aria-describedby="commentHelp" placeholder="Comment here" />
                  <small id="commentHelp" className="form-text text-muted" >Input your comment here</small>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xl-1 col-md-2">
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
    )
  }
}

export default Review;