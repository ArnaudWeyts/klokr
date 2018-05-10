import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '10%',
          top: '10px'
        }}
      >
        <h1
          style={{
            fontFamily: 'Damion',
            color: '#FD46F5',
            textAlign: 'center',
            verticalAlign: 'center',
            lineHeight: '100%',
            fontSize: '55px'
          }}
          onClick={this.props.routeToHomePage}
        >
          <i>Klokr</i>
        </h1>
        <i
          className="material-icons"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px'
          }}
          onClick={this.props.routeToSettingsPage}
        >
          settings
        </i>
      </div>
    );
  }
}

export default Header;
