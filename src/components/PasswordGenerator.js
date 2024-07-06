import React, { useState } from 'react';

const PasswordGenerator = ({ goBackClick }) => {
    const [password, setPassword] = useState('');

    const generatePassword = () => {
        const length = 12; // Length of the generated password
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?'; // Characters to include in the password
        let newPassword = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            newPassword += charset[randomIndex];
        }

        setPassword(newPassword);
    };

    return (
        <div className="page-container">
            <h1>Password Generator</h1>
            <button onClick={goBackClick}>Go Home</button>
            <div>
                <button onClick={generatePassword}>Generate Password</button>
                <p>Generated Password: {password}</p>
            </div>
        </div>
    );
};

export default PasswordGenerator;
