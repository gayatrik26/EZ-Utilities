import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import copy from "copy-to-clipboard";
import Buttons from './Buttons';
import '../styles/textUtility.css'; // Import CSS file for styling

const Button = ({ onClick, disabled, children }) => (
    <button
        className="utility-button"
        disabled={disabled}
        onClick={onClick}
    >
        {children}
    </button>
);

const TextUtility = ({ goBackClick }) => {
    const [text, setText] = useState("");
    const [copied, setCopied] = useState(false);

    const handleUpClick = useCallback(() => {
        setText(text.toUpperCase());
    }, [text]);

    const handleLoClick = useCallback(() => {
        setText(text.toLowerCase());
    }, [text]);

    const handleOnTextChange = (e) => {
        setText(e.target.value);
    };

    const handleClearClick = useCallback(() => {
        setText("");
    }, []);

    const textReplicate = useCallback(() => {
        setText(text + " " + text);
    }, [text]);

    const invertText = useCallback(() => {
        setText(
            text.split("").map(char => {
                return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
            }).join("")
        );
    }, [text]);

    const handleCopyClick = useCallback(() => {
        copy(text);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }, [text]);

    const wordCounter = useCallback(() => {
        if (text.trim() === "") {
            return 0;
        } else {
            return text.split(/\s+/).filter(word => word !== "").length;
        }
    }, [text]);

    const minutesRead = useCallback(() => {
        const words = text.split(/\s+/).filter(word => word !== "").length;
        return (words * 0.008).toFixed(2);
    }, [text]);

    return (
        <div>
        <div className="text-utility-container">
            <h1 className="utility-title">TextUtility</h1>
            <textarea
                className="input-text"
                onChange={handleOnTextChange}
                value={text}
                placeholder='Enter your text here'
            />
            <div className="button-container">
                <Button disabled={text.length === 0} onClick={handleUpClick}>Uppercase</Button>
                <Button disabled={text.length === 0} onClick={invertText}>Invert</Button>
                <Button disabled={text.length === 0} onClick={handleClearClick}>Clear</Button>
                <Button disabled={text.length === 0} onClick={handleLoClick}>Lowercase</Button>
                <Button disabled={text.length === 0} onClick={handleCopyClick}>Copy</Button>
                <Button disabled={text.length === 0} onClick={textReplicate}>Replicate</Button>
            </div>
            {copied && (
                <p className="copy-message">Text copied!</p>
            )}
            <div className="summary-container">
                <h2 className="summary-title">Text Summary</h2>
                <p className="summary-info">{wordCounter()} words and {text.length} characters</p>
                <p className="summary-info">{minutesRead()} minutes read</p>
            </div>
        </div>
        <div className='btn-container'>
            <Buttons text="Go Home" onClick={goBackClick}/>
        </div>
        </div>
    );
};

TextUtility.propTypes = {
    goBackClick: PropTypes.func.isRequired,
};

export default TextUtility;
