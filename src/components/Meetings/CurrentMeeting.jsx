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

  logThis = (event) => {
    console.log("target:" + event.target.getAttribute('data'))
    console.log("reviewer:" + event.target.parentElement.getAttribute('data'))
  }

  render () {
    if (this.props.user) {
    return (
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              {this.state.availableUsers.map(user => (
                <th>
                  <img src={user.photo || "http://via.placeholder.com/20x20"} className="rounded-circle" alt={user.name} width="30" height="30" key={user.name + '-reviewed'}/>
                  <span>&nbsp;{user.name}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
              {this.state.availableUsers.map(user => (
              <tr data={user.name}>
                <th>
                  <img src={user.photo || "http://via.placeholder.com/20x20"} className="rounded-circle" alt={user.name} width="30" height="30" key={user.name + '-reviewer'}/>
                  <span>&nbsp;{user.name}</span>
                </th>
                {this.state.availableUsers.map(user => (
                  <td key={user.name + '-unclear'} data={user.name} className="bg-dark text-light" onClick={this.logThis}>
                    <span>.</span>
                  </td>
                ))}
              </tr>
              ))}
          </tbody>
        </table>
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