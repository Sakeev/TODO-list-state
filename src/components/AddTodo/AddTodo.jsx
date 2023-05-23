import React, { useState } from "react";

const AddTodo = ({ handleTask }) => {
  const [todo, setTodo] = useState("");

  const handleInput = (e) => {
    setTodo(e.target.value);
  };

  const handleAdd = () => {
    if (!todo) {
      alert("Input is empty!");
      return;
    }
    const newTask = {
      task: todo,
      status: false,
      id: Date.now(),
    };

    handleTask(newTask);

    setTodo("");
  };

  return (
    <div>
      <h2>Add TODO Component</h2>
      <input type="text" onChange={handleInput} value={todo} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTodo;
