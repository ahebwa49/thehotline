import React from "react";

class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  checkAnswer = () => {
    console.log("yes or no has been selected");
  };

  render() {
    return (
      <div className="answers">
        <div className="answer" onClick={this.checkAnswer}>
          Yes
        </div>
        <div className="answer" onClick={this.checkAnswer}>
          No
        </div>
      </div>
    );
  }
}

export default Answers;
