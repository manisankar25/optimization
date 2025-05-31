import React, { useState, useCallback } from 'react';
const Child = React.memo(({ onClick }) => {
  console.log('Child rendered');
  return <button onClick={onClick}>Click Me</button>;
});

export default function ParentCall() {
  const [count, setCount] = useState(0);

  const handleClick =() => {
    console.log('Clicked!');
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <Child onClick={handleClick} />
    </div>
  );
}
