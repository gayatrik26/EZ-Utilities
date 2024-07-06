import React from 'react';

const YouTubePause = ({ goBackClick }) => {
    const buttonStyle = {
        backgroundColor: '#ffbf69',
        color: 'white',
        border: 'none',
        padding: '0.5rem 1rem', // Equivalent to px-4 py-2
        margin: '0.5rem 0',
        borderRadius: '0.25rem', // Equivalent to rounded
        cursor: 'pointer',
        textAlign: 'center',
        transition: 'background-color 0.3s, color 0.3s',
    };

    const buttonHoverStyle = {
        backgroundColor: '#ff9f1c',
        color: '#4d4d4d', // Equivalent to text-gray-300
    };

    return (
        <div className="page-container">
            <h1>YouTube Video Pause</h1>
            <button
                style={buttonStyle}
                onMouseOver={(e) => {
                    e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
                    e.target.style.color = buttonHoverStyle.color;
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = buttonStyle.backgroundColor;
                    e.target.style.color = buttonStyle.color;
                }}
                onClick={goBackClick}
            >
                Go Home
            </button> 
        </div>
    );
};

export default YouTubePause;
