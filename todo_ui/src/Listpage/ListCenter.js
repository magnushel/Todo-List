import React, { useState } from "react";
import './ListCenter.css';

function ListCenter() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleInputChange = (e) => {
        setTask(e.target.value);
    };

    const handleAddTask = () => {
        if (task.trim()) {
            setTasks([...tasks, task]);
            setTask("");
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddTask();
        }
    };

    return (
        <div className="container">
            <div className="inputContainer">
                <input
                    type="text"
                    value={task}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter a task"
                />
                <button onClick={handleAddTask}>Add</button>
            </div>
            <ul>
                {tasks.map((t, index) => (
                    <li key={index}>{t}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListCenter;
