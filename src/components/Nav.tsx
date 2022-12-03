import React from "react";
import logo from "../../public/whiteLogo.png";
import colorLogo from "../../public/colorLogo.png";
interface NavProps {
  minimal: boolean;
  setShowModal: (e: boolean) => void;
  setIsSignUp: (e: boolean) => void;
  showModal: boolean;
}
const Nav: React.FC<NavProps> = ({
  minimal,
  setShowModal,
  showModal,
  setIsSignUp,
}) => {
  const authToken = false;
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false);
  };
  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={minimal ? colorLogo : logo} />
      </div>
      {!authToken && !minimal && (
        <button
          disabled={showModal}
          onClick={handleClick}
          className="nav-button"
        >
          Log in
        </button>
      )}
    </nav>
  );
};

export default Nav;
