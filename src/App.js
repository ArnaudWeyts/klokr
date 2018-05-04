import React, { Component } from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

import './App.css';

import Header from './Header';

momentDurationFormatSetup(moment);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      running: false,
      paused: true,
      timer: null,
      counter: 0,
      page: 'app'
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

  routeToSettingsPage() {
    this.setState({page: 'settings'})
  }

  render() {
    const { running, paused, counter } = this.state;
    return (
      <div className="App">
        <Header routeToSettingsPage={this.routeToSettingsPage}/>
        {
          this.state.page === 'app' ? 
          <div style={{'height': '100%'}}>
            <div className="timer">{this.renderCircle(running, paused)}</div>
            <div className="duration">
              <h2>
                {moment
                  .duration(counter, 'seconds')
                  .format('hh:mm:ss', { trim: false })}
              </h2>
            </div>
          </div> : ''
        }
      </div>
    );
  }
}

export default App;
