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
    // this.increment = this.increment.bind(this);
    // this.decrement = this.decrement.bind(this);
  }

  render = () => {
    return (
      <div className="counter">
        <button className="btn1" onClick={this.increment}>
          +1
        </button>
        <span className="count">{this.state.counter}</span>
        <button className="btn2" onClick={this.decrement}>
          -1
        </button>
      </div>
    );
  };
  increment = () => {
    //update state --> counter++
    this.setState({
      counter: this.state.counter + 1
    });
  };

  decrement = () => {
    //update state --> counter--
    this.setState({
      counter: this.state.counter - 1
    });
  };
}
