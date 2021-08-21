import React, { Component } from 'react';
import './Counter.css';

export default class Counter extends Component {
  //Define initial state in constructor
  //state --> counter set to 0
  constructor() {
    super();
    this.state = {
      counter: 0
    };
    this.increment = this.increment.bind(this);
  }

  render() {
    return (
      <div className="counter">
        <button onClick={this.increment}>+1</button>
        <span className="count">{this.state.counter}</span>
      </div>
    );
  }
  increment() {
    //update state --> counter++
    this.setState({
      counter: this.state.counter + 1
    });
  }
}
