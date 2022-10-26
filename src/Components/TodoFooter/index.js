import React from "react";
import "../Todo/style.css";

function TodoFooter({ todoList,_changeTodo }) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>
          {todoList.filter((x) => x.isChecked === false)?.length}{" "}
        </strong>
        left
      </span>

      <ul className="filters">
        <li>
          <a href="#/" className="selected">
            All
          </a>
        </li>
        <li>
          <a href="#/">Active</a>
        </li>
        <li>
          <a href="#/">Completed</a>
        </li>
      </ul>

      <button className="clear-completed" onClick={(e)=>_changeTodo(todoList.filter(x=>{return x.isChecked===false}))}>Clear completed</button>
    </footer>
  );
}

export default TodoFooter;
