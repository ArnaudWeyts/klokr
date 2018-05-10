import React, { Component } from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

import './App.css';

import Header from './Header';
import Settings from './Settings';

momentDurationFormatSetup(moment);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      running: false,
      paused: true,
      timer: null,
      counter: 0,
      page: 'settings',
      settings: {}
    };

    this.pausePlay = this.pausePlay.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.tick = this.tick.bind(this);
    this.routeToSettingsPage = this.routeToSettingsPage.bind(this);
    this.routeToHomePage = this.routeToHomePage.bind(this);
    this.saveSettings = this.saveSettings.bind(this);
  }

  saveSettings(settings) {
    this.setState({settings: settings})
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
    this.setState({ page: 'settings' });
  }

  routeToHomePage() {
    this.setState({ page: 'app' });
  }

  render() {
    const { running, paused, counter, page } = this.state;
    return (
      <div className="App">
        <Header routeToHomePage={this.routeToHomePage} routeToSettingsPage={this.routeToSettingsPage} />
        {page === 'app' && (
          <div style={{ height: '100%' }}>
            <div className="timer">{this.renderCircle(running, paused)}</div>
            <div className="duration">
              <h2>
                {moment
                  .duration(counter, 'seconds')
                  .format('hh:mm:ss', { trim: false })}
              </h2>
            </div>
          </div>
        )}
        {page === 'settings' && <Settings saveSettings={this.saveSettings} routeToHomePage={this.routeToHomePage}/>}
      </div>
    );
  }
}

export default App;
