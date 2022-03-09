import React from "react";
import { useNavigate } from "react-router-dom";

// default ???
const Auth = ({ authenticate }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    authenticate(true);
    navigate("/profile");
  };
  return (
    <div>
      <h1>Please Auth to continue </h1>
      <button
        onClick={handleClick}
        // onClick={() => {
        //   localStorage.setItem("user", "admin");
        //   window.location.reload();
        // }}
      >
        Authenticate
      </button>
    </div>
  );
};
export default Auth;
