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
        <p className="result-ans">
          It looks like you are in{" "}
          {score === total
            ? "A HEALTHY RELATIONSHIP"
            : score < total / 2
            ? "A TOXIC RELATIONSHIP"
            : "AN UNHEALTHY RELATIONSHIP"}
        </p>
      </div>
      <Swipe />
    </div>
  );
};

export default Results;
