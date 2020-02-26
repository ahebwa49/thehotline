import React from "react";

const Filler = props => (
  <div className="filler" style={{ width: `${props.percentage}%` }} />
);

class Progress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { percentage, reverse } = this.props;
    return (
      <div className="tracker">
        <Filler percentage={percentage} reverse={reverse} />
      </div>
    );
  }
}

export default Progress;
