import React from "react";
import Header from "./Header";
import Swipe from "./Swipe";

const Results = props => {
  const { score, total } = props;
  return (
    <div>
      <Header />
      <h1> Welcome to the results page :)</h1>
      <h3>
        You scored {props.score}/{props.total}
      </h3>
      <div>
        {score === total
          ? "You are in a healthy relationship"
          : score < total / 2
          ? "You are in a toxic relationship"
          : "You are in an unhealthy relationship"}
      </div>
      <Swipe />
    </div>
  );
};

export default Results;
