import React, { useState } from "react";
import AuthModal from "../components/AuthModal";
import Nav from "../components/Nav";

const Home = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const authToken = false;
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(true);
  };
  return (
    <div className="overlay">
      <Nav
        minimal={false}
        setShowModal={setShowModal}
        showModal={showModal}
        setIsSignUp={setIsSignUp}
      />
      <div className="home">
        <h1 className="primary-title">Swipe right®️ </h1>
        <button className={"primary-button"} onClick={handleClick}>
          {authToken ? "SignOut" : "Create Account"}
        </button>
        {showModal && (
          <AuthModal
            isSignUp={isSignUp}
            setShowModal={setShowModal}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
