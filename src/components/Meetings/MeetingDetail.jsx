import React from "react";
import axios from "axios";

class MeetingDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meeting: "some value"
    };
  }
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/meetings/599dcb67f0f16317844583fc
  componentDidMount() {
    axios.get(this.props.match.params.id)
      .then(res => console.log("this mounted"))
      // .then(res => this.setState({ meeting: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <p>This Rendered</p>
        <p>{this.state.meeting}</p>
      </div>
    );
  }
}

export default MeetingDetail;
