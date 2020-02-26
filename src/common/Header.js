import React from "react";
import "./common.css";

const Header = () => {
  return (
    <div className="header">
      <img src="/static/img/arrow-left.svg" width="20" alt="back" height="20" />{" "}
      Back
      <img
        src="/static/img/ndvhheader.png"
        width="52.13"
        alt="header-logo"
        height="50"
        className="header-image"
      />
    </div>
  );
};

export default Header;
