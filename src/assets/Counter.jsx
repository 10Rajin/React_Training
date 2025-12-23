// function App() {
import React, { useState } from "react";

const Counter = () => {
  const [state, setState] = useState(100);

  function increment() {
    setState(state + 1);
    setState((prevState) => prevState + 1);
  }
  function decrement() {
    setState(state - 1);
    }

  return (
    <>
      <h1>{state}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </>
  );
};

export default Counter;
