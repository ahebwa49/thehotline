import React from "react";

const Filler = props => (
  <div className="filler" style={{ width: `${props.reverse}%` }} />
);

class Progress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { percentage, reverse } = this.props;
    return (
      <div className="progress">
        <div className="progress-header">
          <div>Healthy</div>
          <div>Unhealthy</div>
          <div>Abusive</div>
        </div>
        <div className="tracker">
          <Filler percentage={percentage} reverse={reverse} />
        </div>
      </div>
    );
  }
}

export default Progress;
