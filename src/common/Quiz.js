import React from "react";
import Answers from "./Answers";

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="quiz">
        <div className="mask-group">
          <img
            src="/static/img/MaskGroup.png"
            width="250"
            alt="mask group"
            height="250"
            style={{ display: "inline-block" }}
          />
          {/* <div className="question-count">1/12</div> */}
        </div>
        <div className="question">{this.props.question}</div>
        <Answers nextQuestion={this.props.nextQuestion} />
      </div>
    );
  }
}

export default Quiz;
