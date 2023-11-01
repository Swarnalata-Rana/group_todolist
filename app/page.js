'use client'
import React, { useState } from "react";
const Form_Component = () => {
  const [inputlist, setInputlist] = useState("");
  const [items, setItems] = useState([]);
  const [tasktime, setTaskTime] = useState("");
  const [priority,setPriority] =useState("");

  const handlerNameEvent = (event) => {
    setInputlist(event.target.value);
  };
  
  const handlerTiemEvent = (event) => {
    setTaskTime(event.target.value);
  };
  const handlerPriorityEvent=(event)=>{
    setPriority(event.target.value)
  }

  const ListOfItems = () => {
    if (inputlist.trim() === "" || tasktime.trim() === "") {
      return;
    }
    const NewTask = {
      name: inputlist,
      taskTime: tasktime,
      taskpriority: priority
    };
    setItems([...items, NewTask]);
    setInputlist("");
    setTaskTime("");
    setPriority("")
  };

  const deleteItems = (id) => {
    // Use the correct parameter name 'id'
    console.log("deleted");
    setItems((olditems) => {
      return olditems.filter((_, index) => index !== id);
    });
  };

  return (
    <>
      <div className="row_1">
        <div className="row_2">
          <h1>Todo List</h1>
          Enter Your Work Name
          <input
            type="text"
            placeholder="Enter Your Todo Item"
            value={inputlist}
            onChange={handlerNameEvent}
          />
          Enter Your Time
          <input
            type="text"
            placeholder="Enter Your Todo Item"
            value={tasktime}
            onChange={handlerTiemEvent}
          />
          Enter Your Priority
          <select value={priority} onChange={handlerPriorityEvent}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <button onClick={ListOfItems}>Add</button>

          <ul className="remove_dot">
            {items.map((item, index) => (
              <li key={index}>
                <span>
                  Task Name : {item.name}
                </span>
                <span>
                  Task Time : {item.taskTime}
                </span>
                <span>
                  Task Priority : {item.taskpriority}
                </span>
                <button   >Done</button>
                <button onClick={() => deleteItems(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Form_Component;

