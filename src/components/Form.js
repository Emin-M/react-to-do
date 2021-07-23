import React, { useState } from "react";

const Form = ({ setInputText, inputText, todos, setTodos, setStatus }) => {
    const [error, setError] = useState("");

    const inputHandler = (e) => {
        setInputText(e.target.value)
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        if(inputText) {
        setTodos([...todos, {text: inputText, completed: false, id: Math.random()*10000}]);
        setError("")
        }else {
           setError("The To-Do can't be empty")
        }
        setInputText("");
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return (
        <form>
            <input value={inputText}
                   onChange={inputHandler} type="text" 
                   className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="display">{error}</div>
            <div className="select">
                <select onChange={statusHandler} 
                        name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">UnCompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form;