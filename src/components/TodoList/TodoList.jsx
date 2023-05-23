import React from "react";
import "./TodoList.css";

const TodoList = ({ todos, changeStatus }) => {
  let style = {
    color: "red",
    listStyleType: "none",
  };

  return (
    <>
      <h2>TODO List Component</h2>
      <ul style={style}>
        {todos.map((item) => (
          <li key={item.id} className={item.status ? "completed" : ""}>
            <input type="checkbox" onChange={() => changeStatus(item.id)} />
            {item.task}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
