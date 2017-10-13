import React from 'react';

const ControlPanel = (props) => {

  var goToStatistics = () => {
    props.changeStatus('statistics');
  }

  var goToHome = () => {
    props.changeStatus('home');
  }

  let homeRefreshButton = '';
  if (props.status === 'home') {
    homeRefreshButton = <button type='button' onClick={props.determineBall}>Refresh</button>;
  } else if (props.status === 'statistics') {
    homeRefreshButton = <button type='button' onClick={goToHome}>Home</button>;
  }

  return (
    <div>
      <button onClick={goToStatistics}>Statistics</button>
      {homeRefreshButton}
    </div>
  )
}

export default ControlPanel;
