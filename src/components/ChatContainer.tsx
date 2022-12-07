import React from 'react'
import { userProps } from '../pages/Dashboard';
import ChatDisplay from './ChatDisplay'
import ChatHeader from './ChatHeader'
import MatchesDisplay from './MatchesDisplay'

const ChatContainer: React.FC<{ user: userProps | undefined }> = ({ user }) => {
  return (
    <div className="chat-container">
      <ChatHeader user={user} />
      <div>
        <button className="option">Matches</button>
        <button className="option">Chat</button>
      </div>
      <MatchesDisplay />
      <ChatDisplay />
    </div>
  );
};

export default ChatContainer