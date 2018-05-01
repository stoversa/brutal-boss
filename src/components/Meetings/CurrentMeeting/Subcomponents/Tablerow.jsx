import React from 'react';

class Tablerow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      row: 0
    }
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
              <td key={`${user.name}-row${this.state.row++}`} data={user.name} value={user.name} name="commentAbout" className="bg-dark text-light review-option" onClick={this.props.logThis} data-toggle="modal" data-target="#meetingmodal">
            </td>
          )
          }
          else {
            return (
              <td key={`${user.name}-row${this.state.row++}`} className="bg-white">
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