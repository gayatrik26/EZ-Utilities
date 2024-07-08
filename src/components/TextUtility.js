import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import copy from "copy-to-clipboard";
import Buttons from './Buttons';

const Button = ({ onClick, disabled, children }) => (
    <button
        style={{
            padding: '0.3rem 0.4rem',
            marginBottom: '8px',
            textAlign: 'center',
            backgroundColor: '#ffbf69',
            color: 'white',
            border: 'none',
            borderRadius: '0.25rem',
            cursor: 'pointer',
            fontSize:"0.8rem"
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
        <div>
            <div style={{padding: '0.4rem 0.7rem', marginBottom: '0.2rem' }}>
            <h1 style={{fontSize:"1.2rem" , fontWeight : "600", alignSelf:"flex-start" , marginBottom:"0.4rem"}}>TextUtility</h1>
                <textarea
                    style={{ backgroundColor: 'white', color: 'black', marginBottom: '10px', border: '1px solid #ced4da', borderRadius: '4px', padding: '6px 12px', fontSize: '1rem', width: '100%' ,minHeight: '100px', resize: 'vertical' }}
                    onChange={handleOnTextChange}
                    value={text}
                    placeholder='Enter your text here'
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                    <Button disabled={text.length === 0} onClick={handleUpClick}>Uppercase</Button>
                    <Button disabled={text.length === 0} onClick={invertText}>Invert</Button>
                    <Button disabled={text.length === 0} onClick={handleClearClick}>Clear</Button>
                    <Button disabled={text.length === 0} onClick={handleLoClick}>Lowercase</Button>
                    <Button disabled={text.length === 0} onClick={handleCopyClick}>Copy</Button>
                    <Button disabled={text.length === 0} onClick={textReplicate}>Replicate</Button>
                </div>
                {copied && (
                    <p style={{ fontSize: '0.85rem',fontWeight:"500", color: '#ffbf69', textAlign: 'center' }}>Text copied!</p>
                )}
                <div style={{ marginTop: '0.5rem', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '1rem', fontWeight:"500", marginBottom: '0.2rem' }}>Text Summary</h2>
                    <p style={{ fontSize: '1rem', marginBottom: '0.2rem', fontWeight:"500" }}>{wordCounter()} words and {text.length} characters</p>
                    <p style={{ fontSize: '1rem', marginBottom: '0.2rem',fontWeight:"500" }}>{minutesRead()} minutes read</p>
                </div>
            </div>
            <Buttons text="Go Home" onClick={goBackClick}/>
        </div>
    );
};

TextUtility.propTypes = {
    goBackClick: PropTypes.func.isRequired,
};

export default TextUtility;
