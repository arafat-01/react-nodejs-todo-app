import React from 'react';


const TodoItem = ({ todo }) => {
  return (
    <div className="todoitem">
      <label className="checkbox-container">
        <input type="checkbox"/>
        <span className="task-done">{todo.description}</span>
      </label>
    </div>
  )
}

export default TodoItem;
