import React, { useState } from 'react';

export const DrawCircleOnClick = () => {

    const [points, setPoints] = useState([]);
    const [queue, setQueue] = useState([]);

    const handleClick = (e) => {
        setPoints((prev) => [...prev, [e.clientX, e.clientY]]);
    }

    const handleUndo = (e) => {
        e?.stopPropagation();
        console.log(e)
        let lastCircle = points.at(-1)
        setPoints(points.slice(0, points.length-1));
        setQueue(prev => [...prev, lastCircle])
    }

    const handleRedo = (e) => {
        e?.stopPropagation();
        let lastCircle = queue.at(-1)
        setPoints(prev => [...prev, lastCircle]);
        setQueue(queue.slice(0, queue.length-1))
    }

    return (
        <div 
        onClick={handleClick}
        style={{ width: "100vw", height: "100vh", textAlign: "center" }}
        >
            <button
            disabled={points.length === 0}
            onClick={handleUndo}>
                Undo
            </button>{" "}
            <button 
            disabled={queue.length === 0}
            onClick={handleRedo}>
                Redo
            </button>
            {points.map(point => (
                <div style={{
                    position: "absolute",
                    width: "20px",
                    height: "20px",
                    borderRadius: "100%",
                    backgroundColor: "black",
                    top: point[1],
                    left: point[0]
                }}>
                </div>
            ))}
        </div>
    )

}