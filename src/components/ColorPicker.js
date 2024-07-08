/* global chrome , Chrome */
import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import Buttons from './Buttons';

const ColorPicker = ({ goBackClick }) => {
    const [color, setColor] = useState('#ffffff');
    const [error, setError] = useState('');

    const handleChangeComplete = (newColor) => {
        setColor(newColor.hex);
    };

    const ChangeBg = async () => {
        try {
            let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
            if (!tab || !tab.id) {
                throw new Error('Invalid tab');
            }
            await chrome.scripting.executeScript({
                target: { tabId: tab.id },
                args: [color],
                func: (color) => {
                    document.body.style.backgroundColor = color;
                }
            });
            setError(''); // Clear any previous error message
        } catch (err) {
            setError('This is not a valid URL/tab. Please open in another URL.');
            setTimeout(() => {
                setError('');
            }, 2000); // Clear the error message after 5 seconds
        }
    };

    return (
        <div className="page-container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1 style={{ fontSize: "1.4rem", fontWeight: "600", margin: "0.3rem", alignSelf: "flex-start" }}>Color Picker</h1>
            <ChromePicker
                color={color}
                onChangeComplete={handleChangeComplete}
            />
            <div style={{ marginTop: '0.6rem', textAlign: "center", display: "flex" }}>
                <h2 style={{ margin: "0.2rem" }}>Selected Color:</h2>
                <div style={{ backgroundColor: color, width: '50px', height: '50px' }}></div>
            </div>
            {error && <p style={{marginLeft:"0.5rem", color: '#ff9f1c', alignSelf: "flex-start" }}>{error}</p>}
            <div style={{ alignSelf: "flex-start" }}>
                <Buttons text="Go Home" onClick={goBackClick} />
                <Buttons text="Change Background-color" onClick={ChangeBg} />
            </div>
        </div>
    );
};

export default ColorPicker;
