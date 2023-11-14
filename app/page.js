'use client'
import React, { useState } from "react";

const Form_Component = () => {
  const [inputlist, setInputlist] = useState("");
  const [items, setItems] = useState([]);
  const [tasktime, setTaskTime] = useState("");
  const [priority, setPriority] = useState("");

  const handlerNameEvent = (event) => {
      setInputlist(event.target.value);
  };

  const handlerTiemEvent = (event) => {
      setTaskTime(event.target.value);
  };

  const handlerPriorityEvent = (event) => {
      setPriority(event.target.value);
  };

  const UserListOfItems = () => {
      if (inputlist.trim() === "" || tasktime.trim() === "") {
        return;
      }
      const NewTask = {
          name: inputlist,
          taskTime: tasktime,
          taskpriority: priority,
          done: false,
      };
      setItems([...items, NewTask]);
      setInputlist("");
      setTaskTime("");
      setPriority("");
    };

    const toggleDone = (index) => {
        const updatedItems = [...items];
        updatedItems[index].done = !updatedItems[index].done;
        setItems(updatedItems);
    };

    const deleteItems = (id) => {
        setItems((olditems) =>
          olditems.filter((_, index) => index !== id)
        );
    };

    const sortItemsByPriority = () => {
        const sortedItems = [...items].sort((a, b) => a.taskpriority - b.taskpriority);
        setItems(sortedItems);
    };

  return (
    <>
      <div className="row_1">
          <div className="row_2">
              <h1 className="todo_list">Todo List</h1>
              <div className="work_name">
            Enter Your Work Name:-
                <input 
                  className="input_item"
                  type="text"
                  placeholder="Enter Your Todo Item"
                  value={inputlist}
                  onChange={handlerNameEvent}
                />
            </div>
            <div>
            Enter Your Work Time:-
                <input
                  className="input_time"
                  type="text"
                  placeholder="Enter Your Todo Time"
                  value={tasktime}
                  onChange={handlerTiemEvent}
                />
            </div >
            <div className="work_priority_div">
            Enter Your Work Priority:-
                <select className="work_priority" value={priority} onChange={handlerPriorityEvent}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div className="add_btn_div">
                <button className="add_btn" onClick={UserListOfItems}>Add</button>
            </div >
            <div className="sort_btn_div">
                <button className="sort_btn" onClick={sortItemsByPriority}>Sort by Priority</button>
            </div>
  
            <ul className="remove_dot">
              {items.map((item, index) => (
                <li key={index}>
                  Task Name:-
                  <span style={{ textDecoration: item.done ? "line-through" : "none" }}>
                    <td>{item.name}</td>
                  </span>
                  Task Time:-
                  <span style={{ textDecoration: item.done ? "line-through" : "none" }}>
                  <td>{item.taskTime}</td>
                  </span>
                  Task Priority:-
                  <span style={{ textDecoration: item.done ? "line-through" : "none" }}>
                  <td>{item.taskpriority}</td>
                  </span>
                  {/* <div className="done_btn_div"> */}
                      <button className="done_btn" onClick={() => toggleDone(index)}>
                        {item.done ? "Undone" : "Done"}
                      </button>
                  {/* </div> */}
                  {/* <div className="delete_btn_div"> */}
                      <button className="done_btn" onClick={() => deleteItems(index)}>Delete</button>
                  {/* </div> */}
                </li>
              ))}
            </ul>
          </div>
      </div>
    </>
  );
};

export default Form_Component;
