import React from 'react';

export default props => {
  return (
    <div>
      <div
        style={{
          height: '80vh',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <h2>I've worked for {props.hours} hours.</h2>
        <h2>You pay me {props.cost} euro</h2>
      </div>
    </div>
  );
};
