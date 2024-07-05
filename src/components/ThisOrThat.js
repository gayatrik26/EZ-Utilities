import React from 'react';
import { useNavigate } from 'react-router-dom';

const ThisOrThat = () => {
    const navigate = useNavigate();

    const handleNavigateHome = () => {
        navigate('/');
    };

    return (
        <div className="page-container">
            <h1>This or That</h1>
            <button onClick={handleNavigateHome}>Go Home</button>
            {/* Your this or that content */}
        </div>
    );
};

export default ThisOrThat;
