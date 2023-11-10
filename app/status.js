import React, { useState } from 'react';

const App = () => {
  const [inputList, setInputList] = useState('');
  const [priority, setPriority] = useState('1'); 
  const [time, setTime] = useState('');
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

  const handleAdd = () => {
    if (inputList.trim() !== '') {
      const newItem = {
        id: Date.now(),
        text: inputList,
        priority: priority,
        time: time,
      };
      setItems((oldItems) => [...oldItems, newItem]);
      setInputList('');
      setPriority('1'); 
      setTime('');
    }
  };

  const handleDeleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <>
   	 <div className="main_div">
      	<h1>Todo List</h1>
     	 <input 
		  	className="task"
		    type="text"
		    placeholder="Enter a task"
		    value={inputList}
		    onChange={handleInputChange}
      	/>
      	<input
		    className="task1"
		    type="text"
		    placeholder="Enter time"
		    value={time}
		    onChange={handleTimeChange}
      	/>
      	<br />
		  <select value={priority} onChange={handlePriorityChange}>
		    <option value="1">Priority 1</option>
		    <option value="2">Priority 2</option>
		    <option value="3">Priority 3</option>
      	</select>
      	<br />
      	<button onClick={handleAdd}>ADD</button>
      
      	<ul>
        	{items.map((item) => (
          	<li key={item.id}>
            {item.text} - Priority: {item.priority}, Time: {item.time}
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </li>
        ))};
      </ul>
      </div>
    </>
  );
};

export default App;

