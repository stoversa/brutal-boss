import React from 'react'
// TODO - add proptypes

class Review extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userSelected: "",
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


  handleChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  }

  render () {
    if (this.props.user) {
    return (
      <div className="container-fluid bg-light">

      {/* buttons and title */}
        <div className="row">
          <div className="col-xl-1 col-md-2">
            <button type="button" className="btn btn-outline-secondary btn-block">Cancel</button>
          </div>
          <div className="col-xl-10 col-md-8 d-none d-sm-block">
            <h3 className="text-center">Create a New Review</h3>
          </div>
          <div className="col-xl-1 col-md-2">
            <button className="btn btn-outline-success btn-block">Submit</button>
          </div>
        </div>
       {/* buttons and title */}

        <div className="row">
          {/* user */}
          <div className="col-xl-2 col-md-3 text-light bg-secondary">
            <input className="form-control" type="text" placeholder="Search" />
            <ul className="list-group list-group-flush text-light bg-secondary">
              {this.state.availableUsers.map(user => (
                <li className="list-group-item list-group-item-action text-light bg-secondary text-left">
                  <img src={user.photo || "http://via.placeholder.com/20x20"} className="rounded-circle" alt={user.name} width="30" height="30" />
                  <span>&nbsp;{user.name}</span>
                </li>
              ))}
              
            </ul>
          </div>

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
                  <input type="text" value={this.state.value} onChange={this.handleInputChange} className="form-control" id="exampleInputEmail1" name="comment" aria-describedby="commentHelp" placeholder="Comment here" />
                  <small id="commentHelp" className="form-text text-muted" >Input your comment here</small>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xl-1 col-md-2">
            <div className="text-center">Rating</div>
            <ul className="list-group">
              <li className="text-center list-group-item list-group-item-action list-group-item-primary">10</li>
              <li className="text-center list-group-item list-group-item-action list-group-item-primary">9</li>
              <li className="text-center list-group-item list-group-item-action list-group-item-info">8</li>
              <li className="text-center list-group-item list-group-item-action list-group-item-info">7</li>
              <li className="text-center list-group-item list-group-item-action list-group-item-info">6</li>
              <li className="text-center list-group-item list-group-item-action list-group-item-light">5</li>
              <li className="text-center list-group-item list-group-item-action list-group-item-warning">4</li>
              <li className="text-center list-group-item list-group-item-action list-group-item-warning">3</li>
              <li className="text-center list-group-item list-group-item-action list-group-item-danger">2</li>
              <li className="text-center list-group-item list-group-item-action list-group-item-danger">1</li>
            </ul>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="Review">
        <p>Sorry, you really need to be logged in for this page.</p>
      </div>
    )
  }
}
}
export default Review;
