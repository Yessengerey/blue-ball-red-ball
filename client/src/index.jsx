import React from 'react';
import ReactDOM from 'react-dom';

import Rand from '../../helpers/randomizer.js';
import CookieParser from '../../helpers/cookieParser.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redBallCount: (document.cookie && parseInt(CookieParser.parse(document.cookie).redBallCount)) || 0, // If cookie doesn't exist, then default counts to 0
      blueBallCount: (document.cookie && parseInt(CookieParser.parse(document.cookie).blueBallCount)) || 0,
      displayBall: '',
      username: ''
    }

    this.determineBall = this.determineBall.bind(this);
    this.updateBallCounts = this.updateBallCounts.bind(this);
  }

  updateBallCounts(ballNumber) {
    if (ballNumber) {
      this.setState({
        redBallCount: this.state.blueBallCount += 1
      });
    } else {
      this.setState({
        redBallCount: this.state.redBallCount += 1
      });
    }
  }

  determineBall() {
    var blueBallElement = <div><img src='/assets/blueball.png'/></div>;
    var redBallElement = <div><img src='/assets/redball.png'/></div>;

    var ballNumber = Rand.randomize(); // 1 - Blue Ball, 0 - Red Ball

    this.setState({
      displayBall: ballNumber ? blueBallElement : redBallElement
    }, () => {
      this.updateBallCounts(ballNumber);
    });
  }

  // expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'

  componentWillMount() {
    this.determineBall();
  }

  render() {
    console.log(document.cookie);
    console.log('in state', this.state.blueBallCount);
    return (
      <div>
        Welcome to Blue ball - Red ball!
        <div className='ball'>
          {this.state.displayBall}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
