import React from "react";

const Filler = props => {
  const styles = {
    filler: {
      height: "100%",
      width: `${props.reverse}%`,
      background:
        "linear-gradient(90deg, #a81010 0%, #ef934c 39.31%, #41a67f 100%)",
      transform: "matrix(-1, 0, 0, 1, 0, 0)",
      // background: "linear-gradient(90deg, green 0%, orange 100%)",
      borderRadius: "10px"
    }
  };
  return <div style={styles.filler} />;
};

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
