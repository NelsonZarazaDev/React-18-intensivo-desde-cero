import React, { useState } from "react";

export default function Todo({
  todo,
  handleDelete,
  toggleComplete,
  handleEdit,
}) {
  const [newTitle, setNewTitle] = useState(todo.title);
  const handleChange = (e) => {
    if (todo.completed === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };
  return (
    <div className="todo">
      <input
        style={{ textDecoration: todo.completed && "line-through" }}
        value={todo.title === "" ? newTitle : todo.title}
        onChange={handleChange}
      />
      <div>
        <button
          className="button-edit"
          onClick={() => handleEdit(todo, newTitle)}
        >
          Editar
        </button>
        <button
          className="button-complete"
          onClick={() => toggleComplete(todo)}
        >
          Completar
        </button>
        <button className="button-delete" onClick={() => handleDelete(todo.id)}>
          Eliminar
        </button>
      </div>
    </div>
  );
}
