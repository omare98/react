import React, { useState } from "react";

const ExpensiveComponent = () => {
  const [someValue] = useState(() => {
    let value = 0;
    for (let index = 0; index < 100_000; index += 1) {
      value += 1;
    }
    return value;
  });

  return <div>{someValue}</div>;
};

export default ExpensiveComponent;
