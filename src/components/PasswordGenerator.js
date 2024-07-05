import React from 'react';
import { useNavigate } from 'react-router-dom';

const PasswordGenerator = () => {
    const navigate = useNavigate();

    const handleNavigateHome = () => {
        navigate('/');
    };

    return (
        <div className="page-container">
            <h1>Password Generator</h1>
            <button onClick={handleNavigateHome}>Go Home</button>
            {/* Your password generator content */}
        </div>
    );
};

export default PasswordGenerator;
