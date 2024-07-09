import React, { useState } from 'react';
import Buttons from './Buttons';
import '../styles/passwordGenerator.css';

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
        <div>
            <div className="password-generator-container">
                <h1 className="generator-heading">Password Generator</h1>
                <div className="generator-content">
                    <div className="password-field">
                        <input
                            type="text"
                            className="password-input"
                            value={password}
                            readOnly
                        />
                        <div className="copy-icon" onClick={copyToClipboard}>
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
                    {copySuccess && <p className="copy-success">{copySuccess}</p>}
                    <input
                        type="range"
                        min="4"
                        max="18"
                        value={passwordLength}
                        onChange={(e) => setPasswordLength(e.target.value)}
                        className="length-slider"
                    />
                    <div className="password-length">
                        <p>Password length</p>
                        <span>{passwordLength}</span>
                    </div>
                    <div className="checkboxes">
                        <div className="row">
                            <label htmlFor="lowercase">Include lowercase letters (a-z)</label>
                            <input
                                type="checkbox"
                                id="lowercase"
                                checked={includeLowercase}
                                onChange={(e) => setIncludeLowercase(e.target.checked)}
                            />
                        </div>
                        <div className="row">
                            <label htmlFor="uppercase">Include uppercase letters (A-Z)</label>
                            <input
                                type="checkbox"
                                id="uppercase"
                                checked={includeUppercase}
                                onChange={(e) => setIncludeUppercase(e.target.checked)}
                            />
                        </div>
                        <div className="row">
                            <label htmlFor="numbers">Include numbers (0-9)</label>
                            <input
                                type="checkbox"
                                id="numbers"
                                checked={includeNumbers}
                                onChange={(e) => setIncludeNumbers(e.target.checked)}
                            />
                        </div>
                        <div className="row">
                            <label htmlFor="symbols">Include symbols (@-*)</label>
                            <input
                                type="checkbox"
                                id="symbols"
                                checked={includeSymbols}
                                onChange={(e) => setIncludeSymbols(e.target.checked)}
                            />
                        </div>
                    </div>
                    <button
                        className="generate-button"
                        onClick={generatePassword}
                    >
                        Generate Password
                    </button>
                </div>
            </div>
            <div className='btn-container'>
                <Buttons text="Go Home" onClick={goBackClick} />
            </div>
        </div>
    );
};

export default PasswordGenerator;
