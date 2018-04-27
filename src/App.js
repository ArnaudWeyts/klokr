import React, { Component } from 'react';
import Button from 'antd/lib/button';
import './App.css';

import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      running: false,
      paused: true
    };

    this.pausePlay = this.pausePlay.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }

  pausePlay() {
    this.setState({ paused: !this.state.paused });
  }

  startTimer() {
    this.setState({ running: true, paused: false });
  }

  endTimer() {
    this.setState({ running: false });
  }

  renderCircle(running, paused) {
    if (!running) {
      return (
        <div className="circle" onClick={this.startTimer}>
          <i className="circle-icon material-icons">play_arrow</i>
        </div>
      );
    }
    if (paused) {
      return (
        <div className="circle-collection">
          <div className="circle circle-small" onClick={this.pausePlay}>
            <i className="circle-icon material-icons">play_arrow</i>
          </div>
          <div
            className="circle circle-small"
            onClick={() => {
              this.endTimer();
            }}
          >
            <i className="circle-icon material-icons">stop</i>
          </div>
        </div>
      );
    } else {
      return (
        <div className="circle" onClick={this.pausePlay}>
          <i className="circle-icon material-icons">pause</i>
        </div>
      );
    }
  }

  render() {
    const { running, paused } = this.state;
    return (
    <div className="App">
    <Header />
    {this.renderCircle(running, paused)}
    </div>
  );
  }
}

export default App;
