"use client"
import React, { useState } from "react"
import "./globals.css";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [priority, setPriority] = useState("1");
  const [time, setTime] = useState("");
  const [items, setItems] = useState([]);

  const handleInputChange = (event) => {
    setInputList(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleAddItem = () => {
    if (inputList !== "") {
      const newItem = {
        id: new Date().getTime(),
        text: inputList,
        priority: priority,
        time: time,
        done: false,
      };
      setItems((oldItems) => [...oldItems, newItem]);
      setInputList("");
      setPriority("1");
      setTime("");
    }
  };

  const handleToggleDone = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    );
    setItems(updatedItems);
  };

  const handleDeleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const completedItems = items.filter((item) => item.done);
  const pendingItems = items.filter((item) => !item.done);

  return (
    <>
      <div className="main_row">
        <h1>To-do List</h1>
        <input
          className="text"
          placeholder="Add Item"
          value={inputList}
          onChange={handleInputChange}
        />
        <select value={priority} onChange={handlePriorityChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <input
          className="text"
          placeholder="Time"
          value={time}
          onChange={handleTimeChange}
        />
        <button onClick={handleAddItem}>Add</button>

        <h2>Completed Tasks:</h2>
        <ul>
          {completedItems.map((item) => (
            <li key={item.id}>
              <s>{item.text}</s> - Priority: {item.priority}, Time: {item.time}
              <button onClick={() => handleToggleDone(item.id)}>
                {item.done ? "Not Done" : "Done"}
              </button>
              <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
            </li>
          ))}
        </ul>

        <h2>Pending Tasks:</h2>
        <ul>
          {pendingItems.map((item) => (
            <li key={item.id}>
              {item.text} - Priority: {item.priority}, Time: {item.time}
              <button onClick={() => handleToggleDone(item.id)}>
                {item.done ? "Not Done" : "Done"}
              </button>
              <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;

