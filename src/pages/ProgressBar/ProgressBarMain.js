import React, { useEffect, useState } from 'react';
import { ProgressBar } from './ProgressBar';

export const ProgressBarMain = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {

        let timer = setInterval(() => {
            setValue(prev => prev+1)
        }, 100)

        return () => {
            clearInterval(timer)
        }

    }, [])
     
    return <div>
        <h4>Progress Bar</h4>
    <ProgressBar value={value}/>
    </div>
}