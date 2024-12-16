import { useState } from "react";

function Counter() {
  //const state = useState(0); // array [0, f]
  // const value = state[0];
  // const valueFunction = state[1];
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    if(count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div className="container">
      <h2>Counter</h2>
      <div>{count}</div>
      <div>
        <button onClick={decrement} className="btn btn-warning">-</button>
        <button onClick={increment} className="btn btn-primary">+</button>
      </div>
    </div>
  )
}

export default Counter;