/* global chrome , Chrome */
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'; // Import UUID generator
import Buttons from "./Buttons";
import '../styles/todo.css'; // Import the CSS file for styling

const TodoList = ({ goBackClick }) => {
  const [tasks, setTasks] = useState([]);
  const [inputTaskValue, setInputTaskValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Function to load tasks from Chrome storage
  const loadTasks = () => {
    if (chrome && chrome.storage && chrome.storage.sync) {
      chrome.storage.sync.get(['tasks'], (result) => {
        if (result.tasks) {
          setTasks(result.tasks);
        }
      });
    } else {
      setErrorMessage('Failed to load tasks: chrome.storage.sync is not available.');
      setTimeout(() => {
        setErrorMessage('');
      }, 2000); // Clear the error message after 5 seconds
    }
  };

  // Function to save tasks to Chrome storage
  const saveTasks = (newTasks) => {
    if (chrome && chrome.storage && chrome.storage.sync) {
      chrome.storage.sync.set({ tasks: newTasks });
    } else {
      setErrorMessage('Failed to save tasks: chrome.storage.sync is not available.');
      setTimeout(() => {
        setErrorMessage('');
      }, 2000); // Clear the error message after 5 seconds
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = () => {
    const inputValue = inputTaskValue.trim();
    if (inputValue === "") {
      setErrorMessage("You must write something!");
      setTimeout(() => {
        setErrorMessage("");
      }, 1000);
      return;
    }

    const newTask = {
      id: uuidv4(), // Generate a new UUID
      text: inputValue,
      completed: false, // Initialize task as not completed
    };

    setTasks([...tasks, newTask]);
    setInputTaskValue("");
  };

  const removeTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
    <div className="page-container">
      <h1 className="header">To-Do List</h1>
      <div className="container">
        <ul className="task-list">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={task.completed ? "task completed" : "task"}
            >
              <span onClick={() => toggleTaskCompletion(task.id)}>{task.text}</span>
              <button onClick={() => removeTask(task.id)} className="remove-button">&times;</button>
            </li>
          ))}
        </ul>
        <div className="form">
          <input
            className="input-task"
            id="input-task"
            type="text"
            value={inputTaskValue}
            onChange={(e) => setInputTaskValue(e.target.value)}
            placeholder="Add item"
          />
          <button
            onClick={addTask}
            className="add-button"
          >
            Add
          </button>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
      <div className="btn-container">
      <Buttons text="Go Home" onClick={goBackClick} />
      </div>
    </div>
  );
};

export default TodoList;
