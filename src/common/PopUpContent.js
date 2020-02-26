import React from "react";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  popUpHandle = () => {
    this.props.startQuiz();
  };
  render() {
    return (
      <div className="content">
        <p className="content-heading">Is this abuse?</p>
        <p className="content-text-1">
          Answer a few questions that find out if you are at risk of being in an
          abusive relationship
        </p>
        <p className="content-text">
          Sometimes even if you think your relationship is healthy it can hide
          signs of abuse from one of the partners. We'll help you identify and
          eal with those
        </p>
        <div className="start-button" onClick={this.popUpHandle}>
          Start Now
        </div>
        <p className="start-text">or talk with us</p>
      </div>
    );
  }
}

export default Content;
