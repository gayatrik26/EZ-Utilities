import React from 'react'
const Buttons = ({ onClick, text }) => {
    return (
        <div>
            <button
                style={{
                    padding: '0.3rem 0.5rem',
                    margin: '0.5rem 0.4rem',
                    textAlign: 'center',
                    backgroundColor: '#ffbf69',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.25rem',
                    cursor: 'pointer',
                    fontSize: "0.85rem",
                    outline: "none",
                    transition: 'background-color 0.3s, color 0.3s'
                }}
                onMouseEnter={e => {
                    e.target.style.backgroundColor = '#ff9f1c';
                    e.target.style.color = '#4d4d4d';
                }}
                onMouseLeave={e => {
                    e.target.style.backgroundColor = '#ffbf69'; 
                    e.target.style.color = '#fff'; 
                }}
                onClick={onClick}
            >{text}</button>
        </div>
    );
}

export default Buttons;