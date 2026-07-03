import React from "react";
import "./nav.scss";
import DateTime from "./DateTime";

const Nav = () => {
  return (
    <nav>
      <div className="left">
        <div className="apple-icon">
          <img src="/public/nav-icons/apple.svg" alt="" />
        </div>
        <div className="nav-item">
          <p>Sarthak Srivastava</p>
        </div>
        <div className="nav-item">
          <p>File</p>
        </div>
        <div className="nav-item">
          <p>Window</p>
        </div>
        <div className="nav-item">
          <p>Terminal</p>
        </div>
      </div>

      <div className="right">
        <div className="battery-icon">
          <img src="/public/nav-icons/battery.png" alt="" />
        </div>
        <div className="wifi-icon">
          <img src="/public/nav-icons/wifi.svg" alt="" />
        </div>
        <div className="date-time">
          <DateTime />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
