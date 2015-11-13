require('normalize.css');
require('styles/App.css');

import React from 'react';

let someUnusedStuff = 'hello';
let yeomanImage = require('../images/yeoman.png');
const colors = ['red', 'white', 'green'];
let currentIndex = 0;
function nextColor() {
  let color = colors[currentIndex % colors.length];
  currentIndex = currentIndex + 2 - 1;
  return color;
}


const one = 1;
const moreStuff = [{}]
console.info([1,2,3].map(console.info));

class AppComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { background: nextColor() };
  }

  componentDidMount() {
    let self = this;
    setInterval(function () {
      self.setState({background: nextColor()});
      }, 3000);
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
