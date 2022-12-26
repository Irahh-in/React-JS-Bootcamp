import React, { useState } from "react";

function State() {
  const [count, setCount] = useState(2);

  return (
    <div>
      <div>Count: {count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log(count);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
          console.log(count);
        }}
      >
        Decrement
      </button>
      <div>Count: {count}</div>
      <div>Count: {count}</div>
      <div>Count: {count}</div>
      <div>Count: {count}</div>
    </div>
  );
}

export default State;
