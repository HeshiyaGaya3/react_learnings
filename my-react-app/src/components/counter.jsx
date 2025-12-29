import React from "react";
import { useState } from "react";

export default function Counter({ initial, maxCount , minCount}) {
  const [count, setCount] = useState(initial);
  const increment = () => {
    if (count < maxCount) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if(count >minCount)
    setCount(count - 1);
  };

  console.log("aaa");
  return (
    <div className="card">
      <button onClick={increment}>+</button>
      <p> count is {count} </p>

      <button onClick={decrement}>-</button>
      <p></p>
    </div>
  );
}
