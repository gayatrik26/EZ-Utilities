import React, { useState } from 'react';
import Buttons from './Buttons';
import '../styles/rockPaperScissors.css';

const RockPaperScissors = ({ goBackClick }) => {
    const [scores, setScores] = useState({ user: 0, comp: 0 });
    const [message, setMessage] = useState('Play your Move!');
    const [selectedChoice, setSelectedChoice] = useState(null);

    const choices = [
        { id: 'rock', icon: '✊' },
        { id: 'paper', icon: '✋' },
        { id: 'scissors', icon: '✌️' }
    ];

    const generateCompChoice = () => choices[Math.floor(Math.random() * choices.length)].id;

    const drawGame = () => setMessage('Game was draw. Play again!');

    const showWinner = (userChoice, compChoice) => {
        if (userChoice === compChoice) {
            drawGame();
        } else {
            const userWin = (
                (userChoice === 'rock' && compChoice === 'scissors') ||
                (userChoice === 'paper' && compChoice === 'rock') ||
                (userChoice === 'scissors' && compChoice === 'paper')
            );

            const messagePrefix = userWin ? 'You win!Your' : 'You lose!';

            setScores(prev => ({
                ...prev,
                user: userWin ? prev.user + 1 : prev.user,
                comp: userWin ? prev.comp : prev.comp + 1
            }));

            setMessage(`${messagePrefix} ${userChoice} beats ${compChoice}`);
        }
    };

    const playGame = userChoice => {
        const compChoice = generateCompChoice();
        showWinner(userChoice, compChoice);
    };

    const handleChoiceClick = userChoice => {
        setSelectedChoice(userChoice);
        playGame(userChoice);
    };

    const handleReset = () => {
        setScores({ user: 0, comp: 0 });
        setMessage('Play your Move!');
        setSelectedChoice(null);
    };

    return (
        <div className="rock-paper-scissors-container">
            <h1 className="game-title">Rock Paper Scissors</h1>

            <div className="choices-container">
                {choices.map(({ id, icon }) => (
                    <div
                        key={id}
                        className={`choice ${selectedChoice === id ? 'active' : ''}`}
                        onClick={() => handleChoiceClick(id)}
                        onMouseEnter={() => setSelectedChoice(id)}
                        onMouseLeave={() => setSelectedChoice(null)}
                    >
                        <span className="choice-icon">{icon}</span>
                    </div>
                ))}
            </div>

            <div className="scoreboard">
                <div className="score">
                    <p className="score-text">{scores.user}</p>
                    <p className="score-label">YOU</p>
                </div>
                <div className="score">
                    <p className="score-text">{scores.comp}</p>
                    <p className="score-label">COMP</p>
                </div>
            </div>

            <div className="message-box">
                <div className="message">
                    <p className="message-text">{message}</p>
                </div>
            </div>

            <div className="buttons-container">
                <Buttons text="Reset" onClick={handleReset} />
                <Buttons text="Go Home" onClick={goBackClick} />
            </div>
        </div>
    );
};

export default RockPaperScissors;
