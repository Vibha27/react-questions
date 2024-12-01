import React, { useState } from 'react'
import { useToggle } from './CustomHook';

function Counter() {
    const [count, setCount] = useState(1);
    const [show, toggleShow] = useToggle(true);
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');

    const handleIncrement = () => {
        setCount((prevCount) => prevCount+1)
    }

    const handleDecrement = () => {
        setCount(prevCount => prevCount-1)
    }

    const curryingExample = (setState) => (e) => {
      setState(e.target.value)
    }

  return (<>
    <button onClick={handleDecrement}>-</button>{" "}
    <b>Counter: {count}</b> {" "}
    <button onClick={handleIncrement}>+</button><br />
    <button onClick={() => toggleShow(!show)}>{show ? 'Hide me' : "Show me"}</button>
    <br/>
    <input value={value1} onChange={curryingExample(setValue1)} /><br/>
    <input value={value2} onChange={curryingExample(setValue2)} />
  </>
  )
}

export default Counter