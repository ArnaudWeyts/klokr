import React from 'react';

import Button from 'antd/lib/button';

export default props => {
  return (
    <div>
      <div
        style={{
          height: '65vh',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <h2>
          I've worked for {props.hours} hour{props.hours > 1 ? 's' : ''}.
        </h2>
        <h2>
          You pay me {props.currency} {props.cost}
        </h2>
      </div>
      <div
        style={{
          height: '15vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Button onClick={props.goToHome}>Payed</Button>
      </div>
    </div>
  );
};
