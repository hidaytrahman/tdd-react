import { useState } from "react";
import { UseCounterPropsTypes } from "./useCounter.types";

export function useCounter({ initialCount = 0 }: UseCounterPropsTypes = {}) {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return {
    count,
    increment,
    decrement,
  };
}
