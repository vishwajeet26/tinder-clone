import React, { Dispatch, SetStateAction, useState } from "react";

interface AuthModalProps {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  isSignUp: boolean
}
const AuthModal:React.FC<AuthModalProps> = ({ setShowModal, isSignUp }) => {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [confirmPassword, setConfirmPassword] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const handleClick = () => {
    setShowModal(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    try {
      if (isSignUp && password !== confirmPassword) {
        setError("Passwords need to match");
      }
      console.log("make a post request to our database");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="auth-modal">
      <div
        style={{ cursor: "pointer" }}
        className="close-icon"
        onClick={handleClick}
      >
        ❌
      </div>
      <h2>{isSignUp ? "CREATE ACCOUNT" : "LOG IN"}</h2>
      <p>
        By clicking Log In, you agree to our terms. Learn how we process your
        data in our Privacy Policy and Cookie Policy
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isSignUp && (
          <input
            type="password"
            id="password-check"
            name="password-check"
            placeholder="confirm password"
            required={true}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}
        <input className="secondary-button" type="submit" />
        <p>{error}</p>
      </form>
      <hr />
      <h2>GET THE APP</h2>
    </div>
  );
};

export default AuthModal;
