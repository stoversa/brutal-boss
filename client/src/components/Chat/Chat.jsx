import React from "react";
import io from "socket.io-client";
import "./Chat.css";
import FontAwesome from 'react-fontawesome';


class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      message: "",
      messages: [],
      isOpen: true
    };

    this.socket = io("localhost:8080");

    this
      .socket
      .on("RECEIVE_MESSAGE", function (data) {
        addMessage(data);
      });

    const addMessage = data => {
      console.log(data);
      this.setState({
        messages: [
          ...this.state.messages,
          data
        ]
      });
      console.log(this.state.messages);
    };

    this.sendMessage = ev => {
      ev.preventDefault();
      this
        .socket
        .emit("SEND_MESSAGE", {
          author: this.state.username,
          message: this.state.message
        });
      this.setState({message: ""});
    };
  }

  expanded = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card" onClick={this.close}><FontAwesome name="fas fa-minus" size="2x"/>
              <div className="card-body">
                <div className="card-title">Global Chat</div>
                <hr/>
                <div className="messages">
                  {this
                    .state
                    .messages
                    .map((message, index) => {
                      return (
                        <div key={index}>
                          {message.author}: {message.message}
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="card-footer">
                <input
                  type="text"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={ev => this.setState({username: ev.target.value})}
                  className="form-control"/>
                <br/>
                <input
                  type="text"
                  placeholder="Message"
                  className="form-control"
                  value={this.state.message}
                  onChange={ev => this.setState({message: ev.target.value})}/>
                <br/>
                <button onClick={this.sendMessage} className="btn btn-primary form-control">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  open = () => {
    this.setState({isOpen: true});
  }

  close = () => {
    console.log('closed')
    this.setState({isOpen: false});
  }

  toggle = () => {
    if (this.state.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  collapsed = () => {
    return <div className="plus" onClick={this.open}><FontAwesome name="fas fa-plus" size="2x"/>
          <p className="chat">Chat</p></div>;
  }

  render() {
    console.log(this.state)
    return this.state.isOpen
      ? this.expanded()
      : this.collapsed();
  }
}

export default Chat;