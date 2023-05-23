import React, { useState } from "react";

const EditTodo = ({ editedObj }) => {
  const [editedTodo, setEditedTodo] = useState(editedObj);

  function editTodo(e) {
    setEditedTodo({ ...editedTodo, task: e.target.value });
  }

  function handleSaveChanges() {
    console.log(editedTodo);
  }

  return (
    <div>
      <h2>Edit TODO Component</h2>
      <input type="text" onChange={editTodo} value={editedTodo.task} />
      <button>Save Changes</button>
    </div>
  );
};

export default EditTodo;
