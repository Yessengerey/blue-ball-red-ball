import React from 'react';
import ReactDOM from 'react-dom';

import Rand from '../../helpers/randomizer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redBall: 0,
      blueBall: 0,
      displayBall: ''
    }
  }

  componentWillMount() {
    var blueBallElement = <div><img src='/assets/blueball.png'/></div>;
    var redBallElement = <div><img src='/assets/redball.png'/></div>;
    this.setState({
      displayBall: Rand.randomize() ? blueBallElement : redBallElement
    });
  }

  render() {

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
