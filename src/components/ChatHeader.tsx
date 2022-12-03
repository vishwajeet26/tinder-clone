import React from 'react'

const ChatHeader: React.FC = () => {
  return (
    <div className="chat-container-header">
      <div className="profile">
        <div className="img-container">
          <img src="" />
        </div>
        <h3>UserName</h3>
      </div>
      <i className="log-out-icon">⬅</i>
    </div>
  );
};

export default ChatHeader