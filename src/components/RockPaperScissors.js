import React from 'react';
import { useNavigate } from 'react-router-dom';

const RockPaperScissors = () => {
    const navigate = useNavigate();

    const handleNavigateHome = () => {
        navigate('/');
    };

    return (
        <div className="page-container">
            <h1>Rock Paper Scissors</h1>
            <button onClick={handleNavigateHome}>Go Home</button>
            {/* Your rock paper scissors content */}
        </div>
    );
};

export default RockPaperScissors;
