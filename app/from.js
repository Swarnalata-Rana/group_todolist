"use client"
import React, { useState } from "react";
import "./globals.css"

const App = () => {
  const [inputList, setInputList] = useState("");
  const [priority ,setPriority] = useState("low")
  const [time,setTime]=useState("")
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
    	const newItem ={
    		text: inputList
            priority: priority,
            time: time
    	};
      	setItems((oldItems) => [...oldItems, newItem]);
      	setInputList("");
      	setPriority("low");
      	setTime("");
      
      
    }
  };

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
			<option value="low">1</option>
			<option value="medium"> 2</option>
			<option value="high"> 3</option>
		</select>
		
		<input 
			className="text"
			placeholder="Time" 
			value={time}
			onChange={handleTimeChange} 
		/>
		<button onClick={handleAddItem}>Add</button>
		<ul>
          {items.map((item, index) => {
            return ( 
            	<li key={index}>
            {item.text} - Priority: { item.priority} ,Time: {item.time}
            	</li>;
            
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default App;


