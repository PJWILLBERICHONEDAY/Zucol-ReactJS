import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTime: new Date().toLocaleTimeString() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ currentTime: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return <h2>Current Time: {this.state.currentTime}</h2>;
  }
}

export default Timer;
