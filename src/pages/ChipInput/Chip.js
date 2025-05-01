import React from 'react';
import { FiCrosshair } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';

export const Chip = ({
    label="",
    onClose,
    index
}) => {
    return <div style={{
        display: "inline-block",
        padding: "2px 16px",
        margin: "10px",
        background: "#d3cece",
        borderRadius: "12px"
    }}>
        {label}
        <MdClose style={{ color: "red", marginLeft: "10px", cursor: "pointer" }} onClick={() => onClose(index)}>X</MdClose>
    </div>
}