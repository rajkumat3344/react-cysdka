import React, { Component } from 'react';
import CounterButton from '../Components/CounterButton';

class Counter extends Component {
  render = () => {
    return (
      <div>
        <CounterButton by={1} />
        <CounterButton by={5} />
        <CounterButton by={10} />
      </div>
    );
  }
}
 
export default Counter
