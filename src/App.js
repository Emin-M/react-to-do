import React, { useState, useEffect } from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from './components/TodoList'

function App() {
  // States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Run once
  useEffect(() => {
      getLocalTodos();
  }, [])

  // UseEffect
  useEffect(() => {
    filteredHandler();
    saveLocalTodos();
  }, [todos, status]);

  // Functions
  const filteredHandler = () => {
    switch(status) {
      case "completed": 
      setFilteredTodos(todos.filter(todo => todo.completed === true));
      break;
      case "uncompleted": 
      setFilteredTodos(todos.filter(todo => todo.completed === false));
      break;
      default:
      setFilteredTodos(todos);
    }
  };

  // SaveToLocalStorage
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]))
    }else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>To-Do List</h1>
      </header>
      <Form 
        todos={todos} 
        setTodos={setTodos} 
        inputText={inputText} 
        setInputText={setInputText} 
        setStatus={setStatus}
      />
      <TodoList filteredTodos={filteredTodos} 
                setTodos={setTodos} 
                todos={todos}/>
    </div>
  );
}

export default App;
