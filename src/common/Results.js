import React from "react";
import Header from "./Header";
import Swipe from "./Swipe";
import Progress from "./Progress";
import { Link } from "react-router-dom";

const Results = props => {
  const { score, total } = props;
  const percentage = (score / total) * 100;
  const reverse = 100 - percentage;
  return (
    <div>
      <Header />
      <Progress percentage={percentage} reverse={reverse} />
      <div className="result">
        <p className="result-wording">It looks like you are in </p>
        <p className="result-answer">
          {score === total
            ? "A HEALTHY RELATIONSHIP"
            : score < total / 2
            ? "AN ABUSIVE RELATIONSHIP"
            : "AN UNHEALTHY RELATIONSHIP"}
        </p>
      </div>
      <p className="thought">You might be thinking ...</p>
      <div className="result-option-1">
        <img
          src="/static/img/rMaskGroup.svg"
          width="64"
          height="64"
          alt="mask-group"
          className="result-option-1-img1"
        />
        <p className="result-option-1-text">I don't have a steady income</p>
        <img
          src="/static/img/feather-right.svg"
          width="6"
          height="12"
          alt="feather-right"
          className="result-option-1-img2"
        />
      </div>
      <div className="results-reasons">
        <Link to="/but" style={{ textDecoration: "none" }}>
          <p className="results-reasons-text">
            See why people stay in abusive relationships
          </p>
        </Link>
      </div>
      <p className="help-text">We want to help you go through this:</p>
      <div className="call-the-hotline">
        <div className="call-background">
          <img
            src="/static/img/telephone1.svg"
            width="36"
            height="52"
            alt="telephone"
          />
        </div>
        <div className="call-text">
          <p className="call-text-headline">CALL THE HOTLINE</p>
          <p className="call-text-paragraph">
            Our highly-trained advocates are available 24/7/365 to talk with you
            confidentially.
          </p>
        </div>
      </div>
      <Link to="/community-resources" style={{ textDecoration: "none" }}>
        <div className="community-resources">
          <div className="cr-background">
            <img
              src="/static/img/heart1.svg"
              width="40"
              height="40"
              alt="heart"
            />
          </div>
          <div className="cr-text">
            <p className="cr-text-headline">COMMUNITY RESOURCES</p>
            <p className="cr-text-paragraph">
              Find help in your community, support groups, shelters and more.
            </p>
          </div>
        </div>
      </Link>

      <div className="de-escalate">
        <div className="de-escalate-background">
          <img src="/static/img/sad1.svg" width="40" height="40" alt="sad" />
        </div>
        <div className="de-escalate-text">
          <p className="de-escalate-text-headline">PATH TO SAFETY</p>
          <p className="de-escalate-text-paragraph">
            A safety plan is a personalized, practical plan that includes ways
            to remain safe while in a relationship, planning to leave, or after
            you leave.
          </p>
        </div>
      </div>
      <Swipe />
    </div>
  );
};

export default Results;
