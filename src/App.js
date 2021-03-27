// import logo from './logo.svg';
import React from 'react';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Todos from './components/Todos';
import TodoInput from './components/TodoInput';

function App() {
  const [todos, setTodos] = useState ([]);

  useEffect(() => {
    const getTodos = async () => {
      const res = await axios.get ('http://localhost:3000/getTaskList');
      setTodos (res.data);
    };
    getTodos();
  }, []);

  const createTodo = async (text) => {
    const res = await axios.post ('http://localhost:3000/createTask', {description: text});
    setTodos(res.data);
  }

  return (
    <div className="App">
      <h1 className="header">To-Do List</h1>
      <div className="mainbody">
        <TodoInput createTodo={createTodo}/>
        <Todos todos={todos}/>
      </div>
    </div>
  );
}

export default App;
