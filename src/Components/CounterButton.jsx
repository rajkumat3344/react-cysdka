import React, { Component } from 'react';
import './Counter.css';
class CounterButton extends Component {
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
          +{this.props.by}
        </button>
        <span className="count">{this.state.counter}</span>
      </div>
    );
  };
  increment = () => {
    //update state --> counter++
    this.setState({
      counter: this.state.counter + this.props.by
    });
  };
}
export default CounterButton;
