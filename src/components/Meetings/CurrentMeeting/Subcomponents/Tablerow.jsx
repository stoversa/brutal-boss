import React from 'react'

class Tablerow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      row: 0
    }
  }

  logThis = (event) => {
    console.log("target:" + event.target.getAttribute('data'))
    console.log("reviewer:" + event.target.parentElement.getAttribute('data'))
  }

  render() {
    return (
      <tr data={this.props.name}>
        <th>
          <img src={this.props.photo || "http://via.placeholder.com/20x20"} className="rounded-circle" alt={this.props.name} width="30" height="30" key={this.props.name + '-reviewer'} />
          <span>&nbsp;{this.props.name}</span>
        </th>
        {this.props.availableUsers.map(user => {
          if(user.name !== this.props.name){
            return (
            <td key={`${user.name}-row${this.state.row++}`} data={user.name} className="bg-dark text-light" onClick={this.logThis}>
              <span>.</span>
            </td>
          )
          }
          else {
            return (
              <td key={`${user.name}-row${this.state.row++}`} className="bg-dark text-light">
                <span>X</span>
              </td>
            )
          }
        }
        )}
      </tr>
    )
  }
}
export default Tablerow;