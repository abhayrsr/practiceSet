import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleDecrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1> Counter </h1>
      <button onClick={handleDecrement}>-</button>
      <p> Count: {count}</p>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
