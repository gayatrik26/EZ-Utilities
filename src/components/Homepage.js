import React from 'react';
import '../styles/homepage.css';

const Homepage = ({ setActive }) => {
    const features = [
        { id: 1, icon: '🎨', title: 'Color Picker' },
        { id: 2, icon: '📝', title: 'Text Utility' },
        { id: 3, icon: '🌦️🌈⛱️', title: 'Weather Wise' },
        { id: 4, icon: '🔒', title: 'Password Generator' },
        { id: 5, icon: '🗒️', title: 'To-Do List' },
        { id: 6, icon: '✊✋✌️', title: 'Rock Paper Scissors' },
    ];

    const Feature = ({ icon, title, onClick }) => (
        <div className="feature-card" onClick={onClick}>
            <div className="feature-icon">{icon}</div>
            <h2 className="feature-title">{title}</h2>
            <button className="feature-btn">Use Now</button>
        </div>
    );

    return (
        <div className="homepage-container">
            <main className="main-content">
                <h1 className="title">Welcome to EZ Utilities</h1>
                <div className="feature-grid">
                    {features.map((feature) => (
                        <Feature key={feature.id} {...feature} onClick={() => setActive(feature.id)} />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Homepage;
