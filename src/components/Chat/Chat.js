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
    const { messageInput } = this.state;

    if (e.key === 'Enter' && messageInput !== '') {
      this.setState(
        ({ messages, messageInput }) => {
          return {
            messages: [...messages, { text: messageInput }],
            messageInput: ''
          };
        },
        () => this.performAutoScroll()
      );
    }
  };

  performAutoScroll = () => this.scrollToBottom();

  scrollToBottom = () => {
    if (this.messagesEnd)
      this.messagesEnd.scrollIntoView({
        behavior: 'smooth'
      });
  };

  setRef = el => (this.messagesEnd = el);

  get getMessages() {
    const { messages } = this.state;

    return messages.map(({ text }, index) => (
      <Message key={index} text={text} setRef={this.setRef} />
    ));
  }

  render() {
    const { messageInput } = this.state;

    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">{this.getMessages}</div>
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
