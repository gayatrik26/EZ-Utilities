import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="flex flex-col items-center justify-between h-full text-white bg-light-teal">
            <main className="flex flex-col items-center justify-center flex-grow p-4">
                <h1 className="text-3xl font-bold mb-8 text-teal-mid">Welcome to EZ Utilities</h1>
                <div className="grid grid-cols-1 gap-4">
                    <Feature icon="🎨" title="Color Picker" onClick={() => handleNavigation('/color-picker')} />
                    <Feature icon="📝" title="Text Utility" onClick={() => handleNavigation('/text-utility')} />
                    <Feature icon="▶️" title="YouTube Video Pause" onClick={() => handleNavigation('/youtube-pause')} />
                    <Feature icon="🔒" title="Password Generator" onClick={() => handleNavigation('/password-generator')} />
                    <Feature icon="🗒️" title="To-Do List" onClick={() => handleNavigation('/todo-list')} />
                    <Feature icon="✊✋✌️" title="Rock Paper Scissors" onClick={() => handleNavigation('/rock-paper-scissors')} />
                    <Feature icon="🤔" title="This or That" onClick={() => handleNavigation('/this-or-that')} />
                </div>
            </main>
        </div>
    );
};

const Feature = ({ icon, title, onClick }) => {
    return (
        <div className="bg-gray-800 rounded-lg p-4 text-center shadow-lg hover:bg-gray-700 transition duration-300">
            <div className="text-4xl mb-2">{icon}</div>
            <h2 className="text-lg mb-2 font-medium">{title}</h2>
            <button onClick={onClick} className="feature-btn">Use Now</button>
        </div>
    );
};

export default Homepage;
