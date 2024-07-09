/* global chrome, Chrome */
import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import Buttons from './Buttons';
import '../styles/colorPicker.css'; 

const ColorPicker = ({ goBackClick }) => {
    const [color, setColor] = useState('#ffffff');
    const [error, setError] = useState('');

    const handleChangeComplete = (newColor) => {
        setColor(newColor.hex);
    };

    const changeBackgroundColor = async () => {
        try {
            const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

            if (!tab || !tab.id) {
                throw new Error('This is not a valid URL/tab. Please open another URL.');
            }

            const url = new URL(tab.url);

            // Check if the URL is a chrome:// page, new tab, or local file
            if (['chrome:', 'about:newtab', 'file:'].includes(url.protocol)) {
                throw new Error('This is not a valid URL/tab. Please open another URL.');
            }

            await chrome.scripting.executeScript({
                target: { tabId: tab.id },
                args: [color],
                func: (selectedColor) => {
                    document.body.style.backgroundColor = selectedColor;
                },
            });

            setError(''); // Clear any previous error message
        } catch (err) {
            setError(err.message);
            setTimeout(() => {
                setError('');
            }, 2000); // Clear the error message after 2 seconds
        }
    };

    return (
        <div className="page-container">
            <h1 className="title">Color Picker</h1>
            <ChromePicker
                color={color}
                onChangeComplete={handleChangeComplete}
                className="picker"
            />
            <div className="color-preview">
                <h2 className="color-label">Selected Color:</h2>
                <div className="color-box" style={{ backgroundColor: color }}></div>
            </div>
            {error && <p className="error">{error}</p>}
            <div className="button-container">
                <Buttons text="Go Home" onClick={goBackClick} />
                <Buttons text="Change Background Color" onClick={changeBackgroundColor} />
            </div>
        </div>
    );
};

export default ColorPicker;
