import React from "react";
import "../Todo/style.css";
function TodoMain({ todoList, _changeTodo }) {
  console.log(_changeTodo);
  const modifyList = (e, index) => {
    switch (e.target.className) {
      case "destroy":
        todoList=todoList.filter((x,i) => i !== index);
        break;
      case "toggle":
        todoList[index].isChecked = e.target.value === "false";
        break;
      default:
        break;
    }
    _changeTodo(todoList);
    //console.log("hey", todoList, e.target.value, e.target);

  };
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {todoList.map((x, index) => {
          return (
            <li key={index} className={x.isChecked ? "completed" : ""}>
              <div className="view">
                <input
                  id={index}
                  className="toggle"
                  type="checkbox"
                  checked={x.isChecked}
                  value={x.isChecked}
                  onChange={(e) => modifyList(e, index)}
                />
                <label>{x.text}</label>
                <button
                  id={index}
                  className="destroy"
                  onClick={(e) => modifyList(e, index)}
                ></button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default TodoMain;
