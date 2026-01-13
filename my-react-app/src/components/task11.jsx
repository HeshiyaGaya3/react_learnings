import React, { useState } from "react";

export default function Task11() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo.trim() === "") return;

    setTodos([
      ...todos,
      { id: Date.now(), text: todo, completed: false }
    ]);
    setTodo("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <>
      <input
        type="text"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
        placeholder="Enter todo"
      />

      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <span
              onClick={() => toggleTodo(t.id)}
              style={{
                cursor: "pointer",
                textDecoration: t.completed ? "line-through" : "none",
                marginRight: "10px"
              }}
            >
              {t.text}
            </span>

            <button onClick={() => deleteTodo(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
