import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

const ColorPicker = ({goBackClick}) => {
    const [color, setColor] = useState('#ffffff');

    const handleChangeComplete = (newColor) => {
        setColor(newColor.hex);
    };

    return (
        <div className="page-container">
            <h1>Color Picker</h1>
            <div style={{ display: 'flex' }}>
                <button onClick={goBackClick}>Go Home</button>
            </div>
            <ChromePicker
                color={color}
                onChangeComplete={handleChangeComplete}
            />
            <div style={{ marginTop: '20px' }}>
                <h2>Selected Color:</h2>
                <div style={{ backgroundColor: color, width: '100px', height: '100px' }}></div>
            </div>
        </div>
    );
};

export default ColorPicker;
