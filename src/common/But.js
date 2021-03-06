import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Swipe from "./Swipe";

const But = () => {
  return (
    <div>
      <Header />
      <div className="but-header">
        <div className="information1">
          <img
            src="/static/img/information1.svg"
            alt="information"
            className="but-header-img"
          />
        </div>

        <div className="but-header-text">
          <p className="but-header-text-header">BUT...</p>
          <p className="but-header-text-content">
            Does one of these match how you feel?
          </p>
        </div>
      </div>
      <Link to="/but/no-steady-income" style={{ textDecoration: "none" }}>
        <div className="but-option">
          <img
            src="/static/img/rMaskGroup.svg"
            width="64"
            height="64"
            alt="mask-group"
            className="but-option-img"
          />
          <p className="but-option-text">I don't have a steady income</p>
        </div>
      </Link>

      <div className="but-option">
        <img
          src="/static/img/MaskGroup2.svg"
          width="64"
          height="64"
          alt="mask-group"
          className="but-option-img"
        />
        <p className="but-option-text">
          I don't know what will happen if i try to leave
        </p>
      </div>
      <div className="but-option">
        <img
          src="/static/img/MaskGroup3.svg"
          width="64"
          height="64"
          alt="mask-group"
          className="but-option-img"
        />
        <p className="but-option-text">It isn't that bad, is it?</p>
      </div>
      <Swipe />
    </div>
  );
};

export default But;
