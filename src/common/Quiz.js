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
            height="250"
            alt="mask group"
          />
          <div className="question-count">
            <span className="question-count-number">{this.props.count}</span>
            <span className="question-count-total">/{this.props.total}</span>
          </div>
        </div>
        <div className="question">{this.props.question}</div>
        <Answers
          nextQuestion={this.props.nextQuestion}
          answers={this.props.answers}
          correct={this.props.correct}
          increaseScore={this.props.increaseScore}
        />
      </div>
    );
  }
}

export default Quiz;
