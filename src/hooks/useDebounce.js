import React, { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
  // your code here
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(value)
    }, delay)

    return () => {
      console.log("unmounted")
      clearTimeout(timer)
    }
  }, [value])
  
  return debounced
}

export function DebouncedHook() {

  const [value, setValue] = useState("Vibha")
  const debouncedValue = useDebounce(value, 2000)
  
  return <div>
    <h5>Your Name to be debounced:</h5>
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/><br/><br/>
    <h5><u>Results below ({2000}ms):</u></h5>
    <b>Original:</b> {value}<br />
    <b>Debounced:</b> {debouncedValue}
  </div>
}







