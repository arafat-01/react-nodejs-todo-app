import React from 'react';
import { useRef } from 'react';


const TodoInput = ({ createTodo }) => {
  const todoInput = useRef ('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log (todoInput.current.value);
    createTodo(todoInput.current.value);
    todoInput.current.value = '';
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="textbar" placeholder="Enter the description of task" ref={todoInput} required/>
      <input type="submit" className="submit-btn" value="Add Task"/>
    </form>
  )
}

export default TodoInput;
