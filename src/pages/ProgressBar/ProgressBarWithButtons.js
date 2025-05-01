import React from "react";
import './styles.css'

function ProgressBarWithButtons() {
    const [percent, setPercent] = React.useState(0);
    const bgColor = percent < 40 ? "red" : percent < 79 ? "orange" : "green";

    const onProgressChange = (e) => {
        const { id:type } = e.target
        if (type === "increment") {
            setPercent(prev => prev > 90 ? 100 : prev+10)
        } else {
            setPercent(prev => prev < 10 ? 0 : prev-10)
        }     

    }

    return (
        <div>
            {/* Implement the ProgressBar component logic here */}
            <h1>Progress Bar</h1>
            <div
                className="progress-bar"
                style={{
                    background:`linear-gradient(to right,${bgColor} 0% ${percent}%, rgb(187, 189, 187) 0% 100%)`
                }}
            >{percent}%</div><br />
            <button id="decrement" onClick={onProgressChange}>-10%</button>{" "}
            <button id="increment" onClick={onProgressChange}>+10%</button>
        </div>
    );
}

export default ProgressBarWithButtons;
