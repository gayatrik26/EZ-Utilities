import React from 'react';
import { useNavigate } from 'react-router-dom';

const TodoList = () => {
    const navigate = useNavigate();

    const handleNavigateHome = () => {
        navigate('/');
    };

    return (
        <div className="page-container">
            <h1>To-Do List</h1>
            <button onClick={handleNavigateHome}>Go Home</button>
            {/* Your to-do list content */}
        </div>
    );
};

export default TodoList;
