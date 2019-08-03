import React from 'react';
import './Message.css';

const Message = ({ text }) => (
  <span
    ref={el => {
      this.messagesEnd = el;
    }}
    className="message"
  >
    {text}
  </span>
);

export default Message;
