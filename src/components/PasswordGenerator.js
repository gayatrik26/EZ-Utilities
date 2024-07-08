import React, { useState } from 'react';
import Buttons from './Buttons';

const PasswordGenerator = ({ goBackClick }) => {
    const [password, setPassword] = useState('');
    const [passwordLength, setPasswordLength] = useState(8);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [copySuccess, setCopySuccess] = useState('');

    const charset = {
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numbers: '0123456789',
        symbols: '~!@#$%^&*'
    };

    const generatePassword = () => {
        let allchar = '';
        if (includeLowercase) allchar += charset.lowercase;
        if (includeUppercase) allchar += charset.uppercase;
        if (includeNumbers) allchar += charset.numbers;
        if (includeSymbols) allchar += charset.symbols;

        let newPassword = '';
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * allchar.length);
            newPassword += allchar[randomIndex];
        }

        setPassword(newPassword);
        setCopySuccess('');
    };

    const copyToClipboard = () => {
        if (password) {
            navigator.clipboard.writeText(password);
            setCopySuccess('Password copied to clipboard!');
            setTimeout(() => setCopySuccess(''), 1000);
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={{ fontSize: "1.2rem", fontWeight: "600", alignSelf: "flex-start", marginBottom: "0.4rem" }}>Password Generator</h1>
            <div style={styles.content}>
                <div style={styles.pass}>
                    <input
                        type="text"
                        style={styles.passbox}
                        value={password}
                        readOnly
                    />
                    <div onClick={copyToClipboard} style={styles.copyIcon}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            width="24px"
                            height="24px"
                        >
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-2 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h8v14z" />
                        </svg>
                    </div>
                </div>
                {copySuccess && <p style={styles.copySuccess}>{copySuccess}</p>}
                <input
                    type="range"
                    min="4"
                    max="18"
                    value={passwordLength}
                    onChange={(e) => setPasswordLength(e.target.value)}
                    style={styles.slider}
                />
                <div style={styles.passLen}>
                    <p>Password length</p>
                    <span>{passwordLength}</span>
                </div>
                <div style={styles.checkbox}>
                    <label htmlFor="lowercase">Include lowercase letters (a-z)</label>
                    <input
                        type="checkbox"
                        id="lowercase"
                        checked={includeLowercase}
                        onChange={(e) => setIncludeLowercase(e.target.checked)}
                    />
                </div>
                <div style={styles.checkbox}>
                    <label htmlFor="uppercase">Include uppercase letters (A-Z)</label>
                    <input
                        type="checkbox"
                        id="uppercase"
                        checked={includeUppercase}
                        onChange={(e) => setIncludeUppercase(e.target.checked)}
                    />
                </div>
                <div style={styles.checkbox}>
                    <label htmlFor="numbers">Include numbers (0-9)</label>
                    <input
                        type="checkbox"
                        id="numbers"
                        checked={includeNumbers}
                        onChange={(e) => setIncludeNumbers(e.target.checked)}
                    />
                </div>
                <div style={styles.checkbox}>
                    <label htmlFor="symbols">Include symbols (@-*)</label>
                    <input
                        type="checkbox"
                        id="symbols"
                        checked={includeSymbols}
                        onChange={(e) => setIncludeSymbols(e.target.checked)}
                    />
                </div>
                <button
                    id="btn"
                    style={styles.button}
                    onClick={generatePassword}
                    onMouseEnter={e => {
                    e.target.style.backgroundColor = '#ff9f1c';
                    e.target.style.color = '#4d4d4d';
                }}
                onMouseLeave={e => {
                    e.target.style.backgroundColor = '#ffbf69'; 
                    e.target.style.color = '#fff'; 
                }}
                >
                    Generate Password
                </button>
                {/* <button className="feature-btn" style={{textAlign:"center", alignSelf:"flex-start",outline:"none" , margin:"0.4rem 0rem" , backgroundColor:"#ffbf69",color:"white" , padding:"0.3rem 0.6rem", borderRadius:"0.25rem",cursor:"pointer", fontSize:"0.75rem", maxWidth:"4.8rem"}} onClick={goBackClick}>Go Home</button> */}
            </div>
                <Buttons text="Go Home" onClick={goBackClick}/>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '290px',
        // margin: 'auto',
        padding: '1rem',
    },
    heading: {
        textAlign: 'center',
        color: '#333',
        marginBottom: '20px'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.3rem'
    },
    pass: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
    },
    passbox: {
        flexGrow: 1,
        padding: '0.6rem',
        fontSize: '16px',
        borderRadius: '5px',
        color: "#ff9f1c"
    },
    copyIcon: {
        cursor: 'pointer',
        color: '#2ec4b6' // Teal Mid
    },
    slider: {
        width: '100%',
        borderRadius: "2rem",
        backgroundColor: "#ffbf69",
        margin: "0.2rem"
    },
    passLen: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontWeight: "500"
    },
    checkbox: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontSize: "0.9rem"
    },
    button: {
        padding: '0.5rem',
        fontSize: '0.85rem',
        fontWeight: "500",
        backgroundColor: '#ffbf69', // Light Orange
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        textAlign: 'center',
        margin: "0.2rem 0rem"
    },
    copySuccess: {
        color: '#ffbf69',
        fontWeight: "500",
    }
};

export default PasswordGenerator;
