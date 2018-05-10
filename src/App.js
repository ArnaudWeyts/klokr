import React, { Component } from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

import './App.css';

import Header from './Header';
import Settings from './Settings';

import Checkout from './Checkout';

import { saveState, loadState } from './localStorage';

momentDurationFormatSetup(moment);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      running: false,
      paused: true,
      timer: null,
      counter: 0,
      page: 'app',
      hours: 0,
      cost: 0,
      settings: {
        company: '',
        firstName: '',
        lastName: '',
        currency: '€',
        hourlyWage: 15
      }
    };

    this.pausePlay = this.pausePlay.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.tick = this.tick.bind(this);
    this.routeToSettingsPage = this.routeToSettingsPage.bind(this);
    this.routeToHomePage = this.routeToHomePage.bind(this);
    this.saveSettings = this.saveSettings.bind(this);
  }

  componentDidMount() {
    const settings = loadState();

    if (settings) {
      this.setState({ settings });
    }
  }

  saveSettings(settings) {
    this.setState({ settings: settings });
    saveState(settings);
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
    const {
      counter,
      settings: { hourlyWage }
    } = this.state;
    this.setState({
      running: false,
      counter: 0,
      page: 'checkout',
      hours: Math.ceil(counter / 60 / 60),
      cost: Math.ceil(counter / 60 / 60) * hourlyWage
    });
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

  routeToCheckoutPage() {
    this.setState({ page: 'checkout' });
  }

  routeToHomePage() {
    this.setState({ page: 'app' });
  }

  render() {
    const {
      running,
      paused,
      counter,
      page,
      cost,
      settings,
      hours
    } = this.state;
    return (
      <div className="App">
        <Header
          routeToHomePage={this.routeToHomePage}
          routeToSettingsPage={this.routeToSettingsPage}
        />
        {page === 'app' && (
          <div style={{ height: '90vh' }}>
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
        {page === 'checkout' && (
          <Checkout
            hours={hours}
            cost={cost}
            currency={settings.currency}
            goToHome={this.routeToHomePage}
          />
        )}
        {page === 'settings' && (
          <Settings
            saveSettings={this.saveSettings}
            routeToHomePage={this.routeToHomePage}
            settings={settings}
          />
        )}
      </div>
    );
  }
}

export default App;
