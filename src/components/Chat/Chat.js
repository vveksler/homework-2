import React, { Component } from 'react';
import Message from '../Message';
import './Chat.css';

export default class Chat extends Component {
  state = {
    messages: [],
    messageInput: ''
  };

  changeInputMessage = e => {
    this.setState({
      messageInput: e.target.value
    });
  };

  sendMessageOnEnter = e => {
    if (e.key === 'Enter' && this.state.messageInput !== '') {
      this.setState({
        messages: [...this.state.messages, { text: this.state.messageInput }],
        messageInput: ''
      });
    }
  };

/*   scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: 'smooth' });
  };

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  } */

  render() {
    const { messageInput, messages } = this.state;

    return (
      <div className="chat">
        <div
          className="message-list"
          /* ref={el => {
            this.messagesEnd = el;
          }} */
        >
          <div className="messages">
            {messages.map((message, index) => (
              <Message key={index} text={message.text} />
            ))}
          </div>
        </div>
        <input
          type="text"
          value={messageInput}
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
          className="input-message"
        />
      </div>
    );
  }
}
