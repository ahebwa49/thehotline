import React from "react";
import Header from "./Header";
import Swipe from "./Swipe";

const Results = props => {
  const { score, total } = props;
  return (
    <div>
      <Header />

      {/* <h3>
        You scored {props.score}/{props.total}
      </h3> */}
      <div className="result">
        <p className="result-wording">It looks like you are in </p>
        <p className="result-answer">
          {score === total
            ? "A HEALTHY RELATIONSHIP"
            : score < total / 2
            ? "A TOXIC RELATIONSHIP"
            : "AN UNHEALTHY RELATIONSHIP"}
        </p>
      </div>
      <p className="thought">You might be thinking ...</p>
      <div className="result-option-1">
        <img
          src="/static/img/rMaskGroup.png"
          width="64"
          height="64"
          alt="mask-group"
          className="result-option-1-img1"
        />
        <p className="result-option-1-text">I dont have a steady income</p>
        <img
          src="/static/img/feather-right.svg"
          width="6"
          height="12"
          alt="feather-right"
          className="result-option-1-img2"
        />
      </div>
      <div className="results-reasons">
        <p className="results-reasons-text">
          See why people stay in abusive relationships
        </p>
      </div>
      <p className="help-text">We want to help you go through this:</p>
      <div className="call-the-hotline">
        <div className="call-background">
          <img
            src="/static/img/telephone1.png"
            width="36"
            height="52"
            alt="telephone"
          />
        </div>
        <div className="call-text">
          <p className="call-text-headline">CALL THE HOTLINE</p>
          <p className="call-text-paragraph">
            See tips on how to protect yourself and make a call and what to
            expect
          </p>
        </div>
      </div>
      <div className="community-resources">
        <div className="cr-background">
          <img
            src="/static/img/heart1.png"
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
      <div className="de-escalate">
        <div className="de-escalate-background">
          <img src="/static/img/sad1.png" width="40" height="40" alt="sad" />
        </div>
        <div className="de-escalate-text">
          <p className="de-escalate-text-headline">
            TIPS ON HOW TO DE-ESCALATE
          </p>
          <p className="de-escalate-text-paragraph">
            Understand how you can try to community and resolve issues.
          </p>
        </div>
      </div>
      <Swipe />
    </div>
  );
};

export default Results;
