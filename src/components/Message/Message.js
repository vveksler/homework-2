import React from 'react';
import './Message.css';

const Message = ({ text, setRef }) => (
  <span ref={setRef} className="message">
    {text}
  </span>
);

export default Message;
