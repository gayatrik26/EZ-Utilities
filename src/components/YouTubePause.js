import React from 'react';
import { useNavigate } from 'react-router-dom';

const YouTubePause = () => {
    const navigate = useNavigate();

    const handleNavigateHome = () => {
        navigate('/');
    };

    return (
        <div className="page-container">
            <h1>YouTube Video Pause</h1>
            <button onClick={handleNavigateHome}>Go Home</button>
            {/* Your YouTube pause content */}
        </div>
    );
};

export default YouTubePause;
