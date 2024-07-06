import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import copy from "copy-to-clipboard";

const Button = ({ onClick, disabled, children }) => (
    <button
        style={{
            padding: '8px 12px',
            fontSize: '1rem',
            marginBottom: '10px',
            minWidth: '100px',
            textAlign: 'center',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
        }}
        disabled={disabled}
        onClick={onClick}
    >
        {children}
    </button>
);

const TextUtility = ({ goBackClick }) => {
    const [text, setText] = useState("");
    const [copied, setCopied] = useState(false); // State to track copied text

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
        <div style={{ width: '330px', fontFamily: 'Arial, sans-serif' }}>
            <div style={{ backgroundColor: '#f0f0f0', borderRadius: '5px', padding: '10px', marginBottom: '10px' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Text Manipulation</h3>
                <textarea
                    style={{ backgroundColor: 'white', color: 'black', marginBottom: '10px', border: '1px solid #ced4da', borderRadius: '4px', padding: '6px 12px', fontSize: '1rem', width: '100%', maxWidth: '100%', minHeight: '80px', resize: 'vertical' }}
                    onChange={handleOnTextChange}
                    value={text}
                    placeholder='Enter your text here'
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    <Button disabled={text.length === 0} onClick={handleUpClick}>Uppercase</Button>
                    <Button disabled={text.length === 0} onClick={handleLoClick}>Lowercase</Button>
                    <Button disabled={text.length === 0} onClick={textReplicate}>Replicate</Button>
                    <Button disabled={text.length === 0} onClick={invertText}>Invert</Button>
                    <Button disabled={text.length === 0} onClick={handleClearClick}>Clear</Button>
                    <Button disabled={text.length === 0} onClick={handleCopyClick}>Copy</Button>
                </div>
                {copied && (
                    <p style={{ fontSize: '0.8rem', color: 'green', marginTop: '5px', textAlign: 'center' }}>Text copied!</p>
                )}
                <div style={{ marginTop: '15px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Text Summary</h2>
                    <p style={{ fontSize: '1rem', marginBottom: '5px' }}>{wordCounter()} words and {text.length} characters</p>
                    <p style={{ fontSize: '1rem', marginBottom: '5px' }}>{minutesRead()} minutes read</p>
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <button style={{ padding: '6px 12px', fontSize: '1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }} onClick={goBackClick}>Go Home</button>
            </div>
        </div>
    );
};

TextUtility.propTypes = {
    goBackClick: PropTypes.func.isRequired,
};

export default TextUtility;
