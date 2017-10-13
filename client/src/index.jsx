// React
import React from 'react';
import ReactDOM from 'react-dom';

// Helpers
import Rand from '../../helpers/randomizer.js';
import CookieParser from '../../helpers/cookieParser.js';

// Components
import ControlPanel from './components/controlPanel.jsx';
import Statistics from './components/statistics.jsx';

// Styles
import style from '../../styles/app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redBallElement: <div><img id='red_img' src='/assets/redball.png'/></div>,
      blueBallElement: <div><img id='blue_img' src='/assets/blueball.png'/></div>,
      displayBall: parseInt(CookieParser.parse(document.cookie).currentBall) ? <div><img src='/assets/blueball.png'/></div> : <div><img src='/assets/redball.png'/></div>,
      status: 'home'
    }

    this.determineBall = this.determineBall.bind(this);
    this.updateBallCounts = this.updateBallCounts.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
  }

  changeStatus(status) {
    if (status === 'home') {
      this.setState({
        status: 'home'
      });
    } else if (status === 'statistics') {
      this.setState({
        status: 'statistics'
      })
    } else if (status === 'reset') {
      document.cookie =
      this.setState({
        status: 'home'
      }, () => {
        document.cookie = 'blueBallCount=0';
        document.cookie = 'redBallCount=0';
      });
    }
  }

  updateBallCounts(ballNumber) {
    var cookieObject = CookieParser.parse(document.cookie);
    switch (ballNumber) {
      // Red Ball
      case 0:
        var redBallImg = document.getElementById('red_img').classList;
        redBallImg.add(style.reappear);
        setTimeout(() => {
          redBallImg.remove(style.reappear);
        }, 500);

        var redCount = parseInt(cookieObject.redBallCount);
        redCount++;
        document.cookie = `redBallCount=${redCount}`;
        break;
      // Blue Ball
      case 1:
        var blueBallImg = document.getElementById('blue_img').classList;
        blueBallImg.add(style.reappear);
        setTimeout(() => {
          blueBallImg.remove(style.reappear);
        }, 500);

        var blueCount = parseInt(cookieObject.blueBallCount);
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

    let ballsOrStats = '';
    if (this.state.status === 'home') {
      ballsOrStats = <div className={style.ball_display}>
        {this.state.displayBall}
      </div>;
    } else if (this.state.status === 'statistics') {
      ballsOrStats = <Statistics changeStatus={this.changeStatus}/>;
    }

    return (
      <div className={style.app_container}>
        <div className={style.title}>
          <span style={{color: '#ed4647'}}>RED</span> vs <span style={{color: '#4c6afe'}}>BLUE</span>
        </div>
        {ballsOrStats}
        <ControlPanel determineBall={this.determineBall} status={this.state.status} changeStatus={this.changeStatus}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
