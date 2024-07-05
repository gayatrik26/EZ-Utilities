import React from 'react';
import { useNavigate } from 'react-router-dom';

const TextUtility = () => {
    const navigate = useNavigate();

    const handleNavigateHome = () => {
        navigate('/');
    };

    return (
        <div className="page-container">
            <h1>Text Utility</h1>
            <button onClick={handleNavigateHome}>Go Home</button>
            {/* Your text utility content */}
        </div>
    );
};

export default TextUtility;
