import React from "react";
import { Link } from "react-router-dom";

const AppLayout = ({ children }) => {
  console.log("render");
  return (
    <div className="app-layout">
      <p>App Layout</p>
      <br />
      <ul className="app-navbar">
        <li>
          <Link to={"/home"}>Home</Link>
        </li>
        <li>
          <Link to={"/users"}>Edit Profile</Link>
        </li>
        <li>
          <Link to={"/"}>Logout</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default AppLayout;
