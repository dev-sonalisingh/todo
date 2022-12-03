import React, { useState } from "react";
import TodoForm from "./Components/TodoForm";
import TodoItems from "./Components/TodoItems";
import "./CSS/App.css";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
const App = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todoList"))
      ? JSON.parse(localStorage.getItem("todoList"))
      : []
  );

  const addTodo = (text) => {
    // debugger;
    let id = todos.length;
    let todo = { id: id, text: text, done: false };
    let newTodos = [...todos, todo];
    setTodos(newTodos);
    localStorage.setItem("todoList", JSON.stringify(newTodos));
    //console.log(newTodos);
  };

  const doneTodo = (id) => {
    let updatedTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });
    setTodos(updatedTodo);
    localStorage.setItem("todoList", JSON.stringify(updatedTodo));
  };

  const deleteTodo = (id) => {
    let updatedTodo = [...todos].filter((todo) => todo.id !== id);
    console.log(updatedTodo);
    setTodos(updatedTodo);
    localStorage.setItem("todoList", JSON.stringify(updatedTodo));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="todo-app">
        <div className="todo-container">
          <h1>To-Do List</h1>
          <TodoForm addTodo={addTodo} />
          <hr />
          {JSON.parse(localStorage.getItem("todoList")) &&
            JSON.parse(localStorage.getItem("todoList")).map((todo) => {
              return (
                <TodoItems
                  doneTodo={doneTodo}
                  deleteTodo={deleteTodo}
                  todo={todo}
                  key={todo.id}
                />
              );
            })}
          {/* <div className="todo-count">Total:{todos.length}</div> */}
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default App;
