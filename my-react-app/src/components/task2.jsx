import React from "react";
import { useState } from "react";

export default function Task2() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      > + </button>
      {count}

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
