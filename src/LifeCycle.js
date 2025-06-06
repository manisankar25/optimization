import React, { useState, useEffect } from 'react'

export default function LifeCycle() {
    let [counter, setCounter] = useState(0)
    counter = 25

    useEffect(() => {
        console.log('test') 
    },[counter])
    return (<div>
        <h1>Hi Mate {counter}</h1>
        <button onClick={()=>setCounter((pre)=>pre+1)}>Click</button>
    </div>)

}