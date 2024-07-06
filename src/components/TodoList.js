import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'; // Import UUID generator

const TodoList = ({ goBackClick }) => {
  const [tasks, setTasks] = useState([]);
  const [inputTaskValue, setInputTaskValue] = useState("");

  const addTask = () => {
    const inputValue = inputTaskValue.trim();
    if (inputValue === "") {
      alert("You must write something!");
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
    <div className="page-container">
      <h1>To-Do List</h1>
      <button onClick={goBackClick}>Go Home</button>
      <div id="list-container">
        {tasks.map((task) => (
          <div key={task.id} className={task.completed ? "task completed" : "task"}>
            <span onClick={() => toggleTaskCompletion(task.id)}>{task.text}</span>
            <button onClick={() => removeTask(task.id)}>&times;</button>
          </div>
        ))}
      </div>
      <input
        id="input-task"
        type="text"
        value={inputTaskValue}
        onChange={(e) => setInputTaskValue(e.target.value)}
        placeholder="Enter your task here"
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default TodoList;
