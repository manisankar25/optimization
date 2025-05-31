import React, { useState } from 'react';
import Child1 from './child1';

export default function Parent() {
    const [state, setState] = useState('')
    const [count, setCount] = useState(0);

    const handleClickText = (e) => {
        console.log("Text input changed:", e.target.value);
        setState(e.target.value)
    };
    const handleClickButton = (e) => {
        setCount(count + 1);
        console.log("Button clicked with value:", e.target.value);
    }

    const sample = () => {
        console.log("sample function called");
    }
    const receiveFromChild = (data) => {
        console.log("Received from child:", data);
    }
    return (
        <div className="Child1">
            <h1>Parent </h1>
            <p>This is the first child component.</p>
            <input type="text" value={state} onChange={handleClickText} placeholder="Enter text here" />
            <button onClick={handleClickButton}>Click Me</button>
            <p>Button clicked {count} times</p>
            <p>Parent component content goes here.</p>
            <Child1 state={state} receiveFromChild={receiveFromChild} />

        </div>
    );
}