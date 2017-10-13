import React from 'react';

import CookieParser from '../../../helpers/cookieParser.js';

import style from '../../../styles/statistics.css';

const Statistics = (props) => {
  return (
    <div className={style.stats_container}>
      <div className={style.stats_title}>SCORE</div>
      <div className={style.stats_teams_container}>
        <div className={style.team_container} style={{borderRight: '2px solid #939393'}}><span className={style.team_title} style={{color: '#ed4445'}}>TEAM RED</span> <div className={style.team_score}>{CookieParser.parse(document.cookie).redBallCount}</div></div>
        <div className={style.team_container} style={{borderLeft: '2px solid #939393'}}><span className={style.team_title} style={{color: '#4d69f6'}}>TEAM BLUE</span> <div className={style.team_score}>{CookieParser.parse(document.cookie).blueBallCount}</div></div>
      </div>
    </div>
  );
};

export default Statistics;
