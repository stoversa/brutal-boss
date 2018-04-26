import React from 'react'
import Tableheader from "./Subcomponents/Tableheader"
import Tablerow from "./Subcomponents/Tablerow"
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
      <div className="table-responsive col-11">
        <table className="table">
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
              <Tablerow name={user.name} photo={user.photo} availableUsers={this.state.availableUsers}/>
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