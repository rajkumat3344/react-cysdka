import React from 'react';
import Counter from './Components/Counter';
// import './style.css';

export default function App() {
  return (
    <div>
      <Counter by={1} />
      <Counter by={5} />
      <Counter by={10} />
    </div>
  );
}
