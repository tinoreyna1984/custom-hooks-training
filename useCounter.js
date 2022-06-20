import { useState } from "react";

export const useCounter = (initialValue = 1, iteration = 1, max = 50) => {
  const [counter, setCounter] = useState(initialValue);

  let validateIteration = iteration < 1;

  const handleAdd = () => {
    if(validateIteration) return;
    if((counter + iteration) < max)
      setCounter(counter + iteration);
  }
  const handleSubtract = () => {
    if(validateIteration) return;
    if(counter - iteration > 0)
      setCounter(counter - iteration);
  }
  const handleReset = () => {
    setCounter(initialValue);
  }

  return [counter, handleAdd, handleSubtract, handleReset];
}