import React, { useState } from "react";

const SECOND = 1000;

const AsyncCounter = () => {
  const nickname = useState("Terry");
  const [count, setCount] = useState(0);

  const decreaseCount = () => {
    window.setTimeout(
      () => setCount((previousCount) => previousCount - 1),
      3 * SECOND
    );
  };

  const increaseCount = () => {
    window.setTimeout(
      () => setCount((previousCount) => previousCount + 1),
      3 * SECOND
    );
  };

  return (
    <div>
      <p>{nickname}</p>
      <p>{count}</p>
      <button onClick={decreaseCount}>- 1</button>
      <button onClick={increaseCount}>+ 1</button>
    </div>
  );
};

export default AsyncCounter;
