import React, { useEffect, useState } from 'react';

export const ProgressBar = ({ value = 0 }) => {

    const [percent, setPercent] = useState(value);

    useEffect(() => {
        // setPercent(Math.min(100, Math.max(value, 0)))
        setPercent(Math.min(100, value))
    }, [value])

    return <div className='progress-div' 
    role='progressbar'
    aria-valuemin={0}
    aria-valuenow={percent}
    aria-valuemax={100}
    style={{
        background: `linear-gradient(90deg, green 0 ${percent}%, gray 0 100%)`
    }}>
        {percent.toFixed()}%
    </div>

}