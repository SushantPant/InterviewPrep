import React, { useEffect, useState } from "react";

const TodolistCode = () => {
  const [newInput, setNewInput] = useState("");
  const [newInputArray, setNewInputArray] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("Tasks")) || [];
    setNewInputArray(storedTasks);
  }, []);

  const saveToLocalStorage = (tasks) => {
    localStorage.setItem("Tasks", JSON.stringify(tasks));
  };

  const handleTaskCreate = () => {
    if (newInput && !newInputArray.includes(newInput)) {
      const updatedTasks = [...newInputArray, newInput];
      setNewInputArray(updatedTasks);
      saveToLocalStorage(updatedTasks);
      setNewInput("");
    }
  };

  const handleDelete = (i) => {
    const updatedTasks = newInputArray.filter((_, index) => index !== i);
    setNewInputArray(updatedTasks);
    saveToLocalStorage(updatedTasks);
  };

  const handleUpdate = (i) => {
    const updatedValue = prompt("Enter new value", newInputArray[i]);
    if (updatedValue) {
      const updatedTasks = newInputArray.map((task, index) =>
        index === i ? updatedValue : task
      );
      setNewInputArray(updatedTasks);
      saveToLocalStorage(updatedTasks);
    } else {
      alert("Error: Blank update text");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newInput}
        onChange={(e) => setNewInput(e.target.value)}
      />
      <button onClick={handleTaskCreate}>Add</button>
      <ol>
        {newInputArray.map((value, i) => (
          <li key={i}>
            {value} <button onClick={() => handleDelete(i)}>Delete</button>{" "}
            <button onClick={() => handleUpdate(i)}>Update</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodolistCode;
