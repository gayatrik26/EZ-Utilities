import React, { useState } from 'react';
import Buttons from './Buttons';

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
        <div className="page-container" style={styles.pageContainer}>
            <h1 style={{ fontSize: "1.2rem", fontWeight: "600", alignSelf: "flex-start", marginBottom: "0.4rem" }}>Rock Paper Scissors</h1>

            <div className="choices" style={styles.choices}>
                {choices.map(({ id, icon }) => (
                    <div key={id}
                        className={`choice ${selectedChoice === id ? 'active' : ''}`}
                        onClick={() => handleChoiceClick(id)}
                        onMouseEnter={() => setSelectedChoice(id)}
                        onMouseLeave={() => setSelectedChoice(null)}
                        style={styles.choice}>
                        <span style={styles.icon}>{icon}</span>
                    </div>
                ))}
            </div>

            <div className="score-board" style={styles.scoreBoard}>
                <div className="score" style={styles.score}>
                    <p style={styles.scoreText}>{scores.user}</p>
                    <p style={styles.scoreText}>YOU</p>
                </div>
                <div className="score" style={styles.score}>
                    <p style={styles.scoreText}>{scores.comp}</p>
                    <p style={styles.scoreText}>COMP</p>
                </div>
            </div>

            <div className="msg-box" style={styles.msgBox}>
                <div className="msg" style={styles.msg}>
                    <p style={styles.msgText}>{message}</p>
                </div>
            </div>
            <div style={{alignSelf:"flex-start"}}>
                <Buttons text="Reset" onClick={handleReset} />
                <Buttons text="Go Home" onClick={goBackClick} />
            </div>
        </div>
    );
};

const styles = {
    pageContainer: {
        fontFamily: 'monospace',
        padding: '0.5rem',
        width: '280px',
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    choices: {
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        marginTop: '1rem',
        alignItems: "center",
    },
    choice: {
        height: '70px',
        width: '70px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        cursor: 'pointer',
        backgroundColor: '#fff',  // Light-orange
        transition: 'background-color 0.3s ease',
    },
    icon: {
        fontSize: '2.5rem',
    },
    scoreBoard: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.8rem',
        marginTop: '1rem',
    },
    score: {
        textAlign: 'center',
    },
    scoreText: {
        fontSize: '1.5rem',
        margin: 0,
    },
    msgBox: {
        textAlign: 'center',
        marginTop: '1rem',
        marginBottom: "0.5rem"
    },
    msg: {
        backgroundColor: '#fff',  // Teal-mid
        fontSize: '0.82rem',
        color: '#2ec4b6',
        padding: '0.6rem',
        fontWeight: 'bold',
        borderRadius: '5px',
        textAlign: 'center',
    },
    msgText: {
        margin: 0,
    },
};

export default RockPaperScissors;