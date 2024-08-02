import { useState } from "react";
import { CirclesContainer } from "./style";
import Circle from "./Circle";

function NestedCircles() {
    const [numOfCircle, setNumOfCircle] = useState(0);

    const handleInputChange = (e) => {
        setNumOfCircle(e.target.value)
    }

    return (<>
        <div>NestedCircles</div>
        <input type="number" value={numOfCircle} onChange={handleInputChange} />
        <CirclesContainer>
            <Circle num={numOfCircle} />
        </CirclesContainer>
        </>
    )
}

export default NestedCircles