import React, { useEffect, useState } from "react";

const Counter = () => {
  const [nickname, setNickname] = useState("Terry");
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = nickname;
  }, [nickname]);

  const toggleNickname = () => {
    if (nickname === "Terry") {
      setNickname("Other");
    } else {
      setNickname("Terry");
    }
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>{nickname}</h1>
      <button onClick={toggleNickname}>toggleNickname</button>
      <h3>{count}</h3>
      <button onClick={decreaseCount}>- 1</button>
      <button onClick={increaseCount}>+ 1</button>
    </div>
  );
};

export default Counter;
