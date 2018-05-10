import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div
        style={{
          width: '100%',
          height: '10vh'
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
        >
          <i>Klokr</i>
        </h1>
        <i
          className="material-icons"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            cursor: 'pointer'
          }}
        >
          settings
        </i>
      </div>
    );
  }
}

export default Header;
