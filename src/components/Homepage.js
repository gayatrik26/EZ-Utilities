import React from 'react';
import '../homepage.css';

const Homepage = ({ setActive }) => {
    return (
        <div className="homepage-container">
            <main className="main-content">
                <h1 className="title">Welcome to EZ Utilities</h1>
                <div className="feature-grid">
                    <Feature icon="🎨" title="Color Picker" onClick={() => setActive(1)} />
                    <Feature icon="📝" title="Text Utility" onClick={() => setActive(2)} />
                    <Feature icon="▶️" title="YouTube Video Pause" onClick={() => setActive(3)} />
                    <Feature icon="🔒" title="Password Generator" onClick={() => setActive(4)} />
                    <Feature icon="🗒️" title="To-Do List" onClick={() => setActive(5)} />
                    <Feature icon="✊✋✌️" title="Rock Paper Scissors" onClick={() => setActive(6)} />
                </div>
            </main>
        </div>
    );
};

const Feature = ({ icon, title, onClick }) => {
    return (
        <div className="feature-card" onClick={onClick}>
            <div className="feature-icon">{icon}</div>
            <h2 className="feature-title">{title}</h2>
            <button className="feature-btn">Use Now</button>
        </div>
    );
};

export default Homepage;
