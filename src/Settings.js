import React, { Component } from 'react';
import './App.css';

const inputItem = {
  flexGrow: '0',
  flexShrink: '0',
  flexBasis: '40%',
  justifyContent: 'center'
};

class Settings extends Component {
  render() {
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
            <input id="company" type="text" />
          </div>
          <div style={inputItem}>
            <label htmlFor="firstname">First name</label>
            <input id="firstname" type="text" />
          </div>
          <div style={inputItem}>
            <label htmlFor="lastname">Last name</label>
            <input id="lastname" type="text" />
          </div>
          <div style={inputItem}>
            <label htmlFor="wage">Hourly wage</label>
            <input id="wage" type="text" />
          </div>
          <div style={inputItem}>
            <label htmlFor="currency">Currency</label>
            <input id="currency" type="text" />
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
          <button>Save</button>
        </div>
      </div>
    );
  }
}

export default Settings;
