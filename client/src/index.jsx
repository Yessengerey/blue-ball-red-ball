import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redBall: 0,
      blueBall: 0
    }
  }

  render() {
    return (
      <div>
        HELLO WORLD
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
