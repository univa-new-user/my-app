require('normalize.css');
require('styles/App.css');

import React from 'react';

let someUnusedStuff = 'hello';
let yeomanImage = require('../images/yeoman.png');


const one = 1;
const moreStuff = [{}]
console.info([1,2,3].map(console.info));

class AppComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { background: 'red' };
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
