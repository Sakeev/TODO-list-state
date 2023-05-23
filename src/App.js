import React, { useState } from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  console.log(todos);

  function handleTask(newObj) {
    const newTodos = [...todos];
    newTodos.push(newObj);
    setTodos(newTodos);
  }

  function changeStatus(id) {
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodos(newTodos);
  }

  return (
    <>
      <AddTodo handleTask={handleTask} />
      <TodoList todos={todos} changeStatus={changeStatus} />
    </>
  );
};

export default App;
