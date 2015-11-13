require('normalize.css');
require('styles/App.css');

import React from 'react';


let yeomanImage = require('../images/yeoman.png');

const colors = ['red', 'white', 'green', 'black'];
let currentIndex = 0;
function nextColor() {
  let color = colors[currentIndex % colors.length];
  currentIndex = currentIndex + 1;
  return color;
}

class AppComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { background: nextColor() };
  }

  componentDidMount() {
    let self = this;
    this.interval = setInterval(()  => self.setState({background: nextColor()}), 3000);
  }

  componentDidUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice" style={{ background: this.state.background }}>Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
