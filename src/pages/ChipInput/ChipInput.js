import React, { useState } from 'react';
import { Chip } from './Chip';

export const ChipInput = () => {
    const [value, setValue] = useState("");
    const [chips, setChips] = useState([]);

    const handleInputChange = (e) => {
        setValue(e.target.value)
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && value) {
            setChips(prev => [...prev, value]);
            setValue("")
        }
    }

    const handleClose = (index) => {
        let updatedChips = [...chips];
        updatedChips.splice(index, 1);
        setChips(updatedChips)
    }

    return (
        <div>
            <input
            value={value}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            /> 
            <div>
                {chips.map((chip, index) => {
                    return <Chip
                    key={index}
                    label={chip}
                    index={index}
                    onClose={handleClose}
                    />
                })}
            </div>
        </div>
    )
}