import React from "react";
import Swipe from "./common/Swipe";
import Header from "./common/Header";
import Quiz from "./common/Quiz";
import PopUp from "./common/PopUp";
import data from "./data/data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      total: data.length,
      showPopUp: true
    };
  }

  componentWillMount() {
    let { count } = this.state;
    this.pushData(count);
  }

  pushData(count) {
    this.setState({
      question: data[count].question
    });
  }

  handleStartQuiz = () => {
    this.setState({
      showPopUp: false
    });
  };

  render() {
    const { showPopUp, question } = this.state;
    if (showPopUp) return <PopUp startQuiz={this.handleStartQuiz} />;
    return (
      <div>
        <Header />
        <Quiz question={question} />
        <Swipe />
      </div>
    );
  }
}

export default App;
