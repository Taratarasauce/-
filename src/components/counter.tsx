import React, { useEffect, useRef, useState } from 'react';

const Counter: React.FC<{}> = () => {
  const [count, setcount] = useState<number>(0);
  // const counter:number = 0

  const increment = () => {
    setcount(count + 1);
  };
  const renderTimes = useRef(10);
  useEffect(() => {
    renderTimes.current = renderTimes.current + 1;
  });

  const focusInput = () => {
    ref.current.focus();
  };

  const ref = useRef<HTMLInputElement>(null!);

  return (
    <>
      <div>{count}</div>
      <button onClick={increment}>counter</button>
      {/* {counter = document.getElementById('counter')} */}
      <div>renderTimes:{renderTimes.current}</div>
      <input ref={ref}></input>
      <button onClick={focusInput}>ref</button>
    </>
  );
};

export default Counter;
