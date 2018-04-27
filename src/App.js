import React, { Component } from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

import './App.css';

momentDurationFormatSetup(moment);
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      running: false,
      paused: true,
      timer: null,
      counter: 0
    };

    this.pausePlay = this.pausePlay.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.tick = this.tick.bind(this);
  }

  pausePlay() {
    this.setState({ paused: !this.state.paused });
  }

  startTimer() {
    this.setState({
      running: true,
      paused: false,
      timer: setInterval(this.tick, 1000)
    });
  }

  endTimer() {
    this.setState({ running: false, counter: 0 });
    clearInterval(this.state.timer);
  }

  tick() {
    console.log('start');
    if (this.state.paused) {
      return;
    }
    this.setState({
      counter: this.state.counter + 1
    });
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
    const { running, paused, counter } = this.state;
    return (
      <div className="App">
        <Header />
        {this.renderCircle(running, paused)}
        <div className="duration">
          <h2>
            {moment
              .duration(counter, 'seconds')
              .format('hh:mm:ss', { trim: false })}
          </h2>
        </div>
      </div>
    );
  }
}

export default App;
