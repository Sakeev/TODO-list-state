import React, { useState } from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import EditTodo from "./components/EditTodo/EditTodo";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const [editedObj, setEditedObj] = useState(null);

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

  function getEditedObj(id) {
    let oneObj = todos.find((item) => item.id === id);
    setEditedObj(oneObj);
  }

  function saveChanges(newObj) {
    let newTodos = [...todos];
    newTodos = newTodos.map((item) => {
      if (item.id === newObj.id) {
        return newObj;
      } else {
        return item;
      }
    });
    setTodos(newTodos);
    setEditedObj(null);
  }

  return (
    <>
      <AddTodo handleTask={handleTask} />
      <TodoList
        todos={todos}
        changeStatus={changeStatus}
        getEditedObj={getEditedObj}
      />
      {editedObj ? (
        <EditTodo editedObj={editedObj} saveChanges={saveChanges} />
      ) : (
        <h4>Not editing todo now</h4>
      )}
    </>
  );
};

export default App;
