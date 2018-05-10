import React, { Component } from 'react';
import './App.css';

const inputItem = {
  flexGrow: '0',
  flexShrink: '0',
  flexBasis: '40%',
  justifyContent: 'center'
};

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: '',
      firstName: '',
      lastName: '',
      hourlyWage: '',
      currency: ''
    };

    this.onSave = this.onSave.bind(this);
  }

  onSave() {
    this.props.saveSettings({
      company: this.state.company,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      hourlyWage: this.state.hourlyWage,
      currency: this.state.currency
    });
    this.props.routeToHomePage();
  }

  render() {
    const {
      company,
      firstName,
      lastName,
      hourlyWage,
      currency
    } = this.props.settings;
    return (
      <div style={{ height: '90%', marginTop: '10%' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            height: '60%',
            margin: '2em',
            justifyContent: 'space-between'
          }}
        >
          <div style={inputItem}>
            <label htmlFor="company">Company</label>
            <input
              onChange={e => {
                this.setState({ company: e.target.value });
              }}
              value={company || ''}
              id="company"
              type="text"
            />
          </div>
          <div style={inputItem}>
            <label htmlFor="firstname">First name</label>
            <input
              onChange={e => {
                this.setState({ firstName: e.target.value });
              }}
              value={firstName || ''}
              id="firstname"
              type="text"
            />
          </div>
          <div style={inputItem}>
            <label htmlFor="lastname">Last name</label>
            <input
              onChange={e => {
                this.setState({ lastName: e.target.value });
              }}
              value={lastName || ''}
              id="lastname"
              type="text"
            />
          </div>
          <div style={inputItem}>
            <label htmlFor="wage">Hourly wage</label>
            <input
              onChange={e => {
                this.setState({ hourlyWage: e.target.value });
              }}
              value={hourlyWage}
              id="wage"
              type="text"
            />
          </div>
          <div style={inputItem}>
            <label htmlFor="currency">Currency</label>
            <input
              onChange={e => {
                this.setState({ currency: e.target.value });
              }}
              value={currency}
              id="currency"
              type="text"
            />
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '40%'
          }}
        >
          <button onClick={this.onSave}>Save</button>
        </div>
      </div>
    );
  }
}

export default Settings;
