import React from "react";
import Swipe from "./common/Swipe";
import Header from "./common/Header";
import Quiz from "./common/Quiz";
import PopUp from "./common/PopUp";
import Results from "./common/Results";
import data from "./data/data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      score: 0,
      total: data.length,
      showPopUp: true,
      showResults: false
      // showPopUp: false,
      // showResults: true
    };
  }

  componentWillMount() {
    let { count } = this.state;
    this.pushData(count);
  }

  pushData(count) {
    this.setState({
      question: data[count].question,
      answers: [data[count].answers[0], data[count].answers[1]],
      correct: data[count].correct,
      count: this.state.count + 1
    });
  }

  handleStartQuiz = () => {
    this.setState({
      showPopUp: false
    });
  };

  handleIncreaseScore = () => {
    this.setState({
      score: this.state.score + 1
    });
  };

  nextQuestion = () => {
    let { count, total } = this.state;
    if (count === total) {
      this.setState({
        showResults: true
      });
    } else {
      this.pushData(count);
    }
  };

  render() {
    const {
      showPopUp,
      showResults,
      question,
      count,
      total,
      score,
      correct,
      answers
    } = this.state;
    if (showPopUp) {
      return <PopUp startQuiz={this.handleStartQuiz} />;
    } else if (showResults) {
      return <Results score={score} total={total} />;
    } else {
      return (
        <div>
          <Header />
          <Quiz
            question={question}
            nextQuestion={this.nextQuestion}
            count={count}
            total={total}
            correct={correct}
            answers={answers}
            increaseScore={this.handleIncreaseScore}
          />
          <Swipe />
        </div>
      );
    }
  }
}

export default App;
