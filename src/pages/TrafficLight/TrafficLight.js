import { useEffect, useState } from "react"
import { TrafficCircle } from "./style"

function TrafficLight() {
    const [color, setColor] = useState("green");
    
    useEffect(() => {
        let timer;
        if(color === "green") {
            timer = setTimeout(() => {
                setColor("orange")
            }, 3000)
        } else if(color === "orange") {
            timer = setTimeout(() => {
                setColor("red")
            }, 500)
        } if(color === "red") {
            timer = setTimeout(() => {
                setColor("green")
            }, 4000)
        }

        return () => clearTimeout(timer)
    }, [color])

  return (<>
    <h2>TrafficLight</h2>
        <TrafficCircle color={color === "green" ? color : ""} />
        <TrafficCircle color={color === "orange" ? color : ""} />
        <TrafficCircle color={color === "red" ? color : ""} />
    </>
  )
}

export default TrafficLight