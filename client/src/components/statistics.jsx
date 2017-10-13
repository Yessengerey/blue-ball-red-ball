import React from 'react';

import CookieParser from '../../../helpers/cookieParser.js';

const Statistics = (props) => {
  return (
    <div>
      Statistics
      Team Red: {CookieParser.parse(document.cookie).redBallCount} <br/>
      Team Blue: {CookieParser.parse(document.cookie).blueBallCount}
    </div>
  );
};

export default Statistics;
