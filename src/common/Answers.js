import React from "react";

class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  checkAnswer = answer => {
    const { correct, increaseScore, answers } = this.props;

    const correctAnswer = answers[correct - 1];

    if (correctAnswer === answer) {
      increaseScore();
    }

    this.props.nextQuestion();
  };

  render() {
    const { answers } = this.props;
    return (
      <div className="answers">
        <div className="answer" onClick={() => this.checkAnswer(answers[0])}>
          {answers[0]}
        </div>
        <div className="answer" onClick={() => this.checkAnswer(answers[1])}>
          {answers[1]}
        </div>
      </div>
    );
  }
}

export default Answers;
