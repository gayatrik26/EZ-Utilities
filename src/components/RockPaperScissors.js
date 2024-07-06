import React, { useState } from 'react';

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

            const messagePrefix = userWin ? 'You win! Your' : 'You lose!';

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
            <h1 style={styles.heading}>Rock Paper Scissors</h1>
            <button onClick={goBackClick} style={styles.button}>Go Home</button>

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

            <button onClick={handleReset} style={styles.resetButton}>Reset</button>
        </div>
    );
};

const styles = {
    pageContainer: {
        fontFamily: 'monospace',
        padding: '10px',
        width: '330px',  // Adjusted width for Chrome extension popup
        backgroundColor: '#f0f0f0',  // Example background color
        borderRadius: '5px',  // Example border radius
    },
    heading: {
        backgroundColor: '#111131',
        color: '#fff',
        height: '5rem',
        lineHeight: '5rem',
        textAlign: 'center',
        margin: 0,
        borderRadius: '5px 5px 0 0',  // Example rounded corners for top
    },
    choices: {
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        marginTop: '1rem',
    },
    choice: {
        height: '100px',  // Adjusted size for choices
        width: '100px',   // Adjusted size for choices
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        cursor: 'pointer',
        backgroundColor: '#e0e0e0',  // Example background color
        transition: 'background-color 0.3s ease',
    },
    icon: {
        fontSize: '3rem',
        color: '#333',  // Example color for icons
    },
    scoreBoard: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '0.5rem',
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
    },
    msg: {
        backgroundColor: '#111131',
        fontSize: '1rem',
        color: '#fff',
        padding: '0.5rem',
        fontWeight: 'bold',
        borderRadius: '5px',
        textAlign: 'center',
    },
    msgText: {
        margin: 0,
    },
    button: {
        margin: '1rem',
        padding: '0.5rem 1rem',
        fontSize: '1rem',
        backgroundColor: '#111131',
        color: '#fff',
        border: 'none',
        borderRadius: '0.3rem',
        cursor: 'pointer',
    },
    resetButton: {
        marginTop: '1rem',
        padding: '0.5rem 1rem',
        fontSize: '1rem',
        backgroundColor: '#ffbf69',
        color: '#fff',
        border: 'none',
        borderRadius: '0.3rem',
        cursor: 'pointer',
    },
};

export default RockPaperScissors;
