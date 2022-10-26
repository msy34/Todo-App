import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./style.css";
import TodoMain from "../TodoMain";
import TodoFooter from "../TodoFooter";

function Todo(props) {
  const [newTodo, addNewTodo] = useState("");
  const [todoList, addTodoList] = useState([
    { text: "Learn JavaScript", isChecked: true },
    { text: "Learn React", isChecked: false },
    { text: "Have a life!", isChecked: false },
  ]);

  const _changeTodo = (todo) => {
    addTodoList([...todo]);
  };

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Enter" && event.target.id === "newTodo" && newTodo!=='') {
        event.preventDefault();
        addTodoList([...todoList, { text: newTodo, isChecked: false }]);
      } else {
        document.removeEventListener("keydown", keyDownHandler);
      }
    };

    document.addEventListener("keydown", keyDownHandler);
  }, [newTodo, todoList]);

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <form>
          <input
            id="newTodo"
            className="new-todo"
            value={newTodo}
            onChange={(e) => addNewTodo(e.target.value)}
            placeholder="What needs to be done?"
            autoFocus
          />
        </form>
      </header>

      <TodoMain todoList={todoList} _changeTodo={_changeTodo} />

      <TodoFooter todoList={todoList} _changeTodo={_changeTodo}></TodoFooter>
    </section>
  );
}

export default Todo;
