import React, { Component } from 'react';

export default class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <button>+1</button>
        <span className="count">0</span>
      </div>
    );
  }
  increment() {
    console.log('increment');
  }
}
