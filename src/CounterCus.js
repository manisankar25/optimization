import useCounter from "./customHooks/useCounter";
export default function Counter() {
    const { count, increment, decrement, reset } = useCounter();

    return(<div>
        <h1>i am counter</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <h2>Count: {count}</h2>

    </div>)

}