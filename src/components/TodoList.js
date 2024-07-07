import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'; // Import UUID generator

const TodoList = ({ goBackClick }) => {
  const [tasks, setTasks] = useState([]);
  const [inputTaskValue, setInputTaskValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
    <div style={styles.pageContainer}>
      <h1 style={{ fontSize: "1.2rem", fontWeight: "600", alignSelf: "flex-start", marginBottom: "0.4rem" }}>To-Do List</h1>
      <div style={styles.container}>
        <div style={styles.taskList}>
          {tasks.map((task) => (
            <div
              key={task.id}
              className={task.completed ? "task completed" : "task"}
              style={{ ...styles.task, ...(task.completed ? styles.taskCompleted : {}) }}
            >
              <span onClick={() => toggleTaskCompletion(task.id)}>{task.text}</span>
              <button onClick={() => removeTask(task.id)} style={styles.removeButton}>&times;</button>
            </div>
          ))}
        </div>
        <div style={styles.form}>
          <input
            style={styles.inputTask}
            id="input-task"
            type="text"
            value={inputTaskValue}
            onChange={(e) => setInputTaskValue(e.target.value)}
            placeholder="Add item"
          />
          <button onClick={addTask} style={styles.addButton}>Add</button>
        </div>
        {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}
      </div>
      <div style={{ alignSelf: "flex-start", backgroundColor: "#ffbf69", color: "white", padding: "0.3rem 0.6rem", borderRadius: "0.25rem", cursor: "pointer", fontSize: "0.75rem", maxWidth: "4.7rem" }}>
        <button onClick={goBackClick}>Go Home</button>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    maxWidth: '280px',
    margin: 'auto',
    padding: '0.5rem',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.2rem',
    backgroundColor: '#fff',
    padding: '0.2rem 0.5rem',
    borderRadius: "1.2rem",
    marginBottom: "0.5rem",
  },
  taskList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  task: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #ccc',
    cursor: 'pointer',
  },
  taskCompleted: {
    color: '#555',
    textDecoration: 'line-through',
  },
  removeButton: {
    background: 'none',
    border: 'none',
    color: '#ff9f1c',
    cursor: 'pointer',
    fontSize: '20px',
  },
  form: {
    display: 'flex',
    alignItems: 'center',
  },
  inputTask: {
    padding: '0.4rem',
    fontSize: '1rem',
    outline: "none"
  },
  addButton: {
    padding: '0.5rem',
    backgroundColor: '#ffbf69',
    color: '#fff',
    border: 'none',
    borderRadius: '1.2rem',
    cursor: 'pointer',
    margin: "0 -0.3rem"
  },
  errorMessage: {
    color: '#ff9f1c',
    fontSize: '0.75rem',
    marginTop: '0.5rem',
    alignSelf: 'flex-start',
  }
};

export default TodoList;
