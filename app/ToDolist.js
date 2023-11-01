import React from 'react'

const ToDolist = (props) => {
  return (
    <div className='main_add_box'>
      <li className='float_delete'>{props.text}</li>
      <button onClick={()=>{
          props.onSelect(props.id)
        }}
        >Delete
      </button>
    </div>
  )
}

export default ToDolist;