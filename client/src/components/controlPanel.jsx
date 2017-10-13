import React from 'react';

import style from '../../../styles/controlPanel.css';

const ControlPanel = (props) => {

  var goToStatistics = () => {
    props.changeStatus('statistics');
  }

  var goToHome = () => {
    props.changeStatus('home');
  }

  let homeRefreshButton = '';
  if (props.status === 'home') {
    homeRefreshButton = <button type='button' onClick={props.determineBall}>PLAY!</button>;
  } else if (props.status === 'statistics') {
    homeRefreshButton = <button type='button' onClick={goToHome}>BACK</button>;
  }

  return (
    <div className={style.control_panel}>
      {homeRefreshButton}
      <button onClick={goToStatistics}>STATISTICS</button>
    </div>
  )
}

export default ControlPanel;
