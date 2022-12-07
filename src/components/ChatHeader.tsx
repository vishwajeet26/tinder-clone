import React from 'react'
import { userProps } from '../pages/Dashboard';
import { useCookies } from 'react-cookie';
const ChatHeader: React.FC<{ user: userProps | undefined }> = ({ user }) => {
  const [cookies, setCookie, removeCookie] = useCookies<any>(['user'])
  const logout = () => {
    removeCookie('userId', cookies.UserId)
    removeCookie('AuthToken', cookies.AuthToken)
    window.location.reload()
  }
  return (
    <div className="chat-container-header">
      <div className="profile">
        <div className="img-container">
          <img src={user?.url} alt={'photo of' + user?.first_name} />
        </div>
        <h3>{user?.first_name}</h3>
      </div>
      <i className="log-out-icon" onClick={logout}>⬅</i>
    </div>
  );
};

export default ChatHeader