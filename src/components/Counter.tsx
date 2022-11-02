import {useState} from "react";

export const Counter = (props: any) => {
    const [count, setCount] = useState(props.increment === 1 ? 6 : 9);

    const increment = () => {
        setCount((count) => count+props.increment);
    }

    return (
        <div>
            <div>{count}</div>
            <button onClick={increment}>+{props.increment}</button>
        </div>
    )
}