import React from 'react';
import ReactDOM from 'react-dom';

import Rand from '../../helpers/randomizer.js';
import CookieParser from '../../helpers/cookieParser.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redBallElement: <div><img src='/assets/redball.png'/></div>,
      blueBallElement: <div><img src='/assets/blueball.png'/></div>,
      displayBall: parseInt(CookieParser.parse(document.cookie).currentBall) ? <div><img src='/assets/blueball.png'/></div> : <div><img src='/assets/redball.png'/></div>
    }

    this.determineBall = this.determineBall.bind(this);
    this.updateBallCounts = this.updateBallCounts.bind(this);
  }

  updateBallCounts(ballNumber) {
    console.log('doc cookie', document.cookie);
    var cookieObject = CookieParser.parse(document.cookie);
    console.log('COOKIE', cookieObject);
    switch (ballNumber) {
      // Red Ball
      case 0:

        var redCount = parseInt(cookieObject.redBallCount);
        console.log('redCount', redCount);
        redCount++;
        document.cookie = `redBallCount=${redCount}`;
        break;
      // Blue Ball
      case 1:
        var blueCount = parseInt(cookieObject.redBallCount);
        console.log('blueCount', blueCount);
        blueCount++;
        document.cookie = `blueBallCount=${blueCount}`;
        break;
    }
  }

  determineBall() {
    var ballNumber = Rand.randomize(); // 1 - Blue Ball, 0 - Red Ball

    this.setState({
      displayBall: ballNumber ? this.state.blueBallElement : this.state.redBallElement
    }, () => {
      document.cookie = `currentBall=${ballNumber}`;
      this.updateBallCounts(ballNumber);
    });
  }

  // expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'

  componentWillMount() {
    if (!document.cookie) {
      document.cookie = 'blueBallCount=0';
      document.cookie = 'redBallCount=0';
      this.determineBall();
    }
  }

  render() {
    return (
      <div>
        Welcome to Blue ball - Red ball!
        <div className='ball'>
          {this.state.displayBall}
        </div>
        <div className='refreshButton'>
          <button type='button' onClick={this.determineBall}>Refresh</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
