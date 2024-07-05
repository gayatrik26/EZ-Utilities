import React from 'react';
import { useNavigate } from 'react-router-dom';

const ColorPicker = () => {
    const navigate = useNavigate();

    const handleNavigateHome = () => {
        navigate('/');
    };

    return (
        <div className="page-container">
            <h1>Color Picker</h1>
            <button onClick={handleNavigateHome}>Go Home</button>
            {/* Your color picker content */}
        </div>
    );
};

export default ColorPicker;
