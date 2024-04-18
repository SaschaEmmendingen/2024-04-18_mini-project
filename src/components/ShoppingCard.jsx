import { useState, useEffect } from "react";

const ShoppingCard = () => {
  // Zustand für die Todo-Liste
  const [todos, setTodos] = useState([]);
  // Zustand für den aktuellen Todo-Text
  const [todoText, setTodoText] = useState("");

  // useEffect, um die Todo-Liste im Local Storage zu speichern
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // useEffect, um Änderungen an der Todo-Liste im Local Storage zu speichern
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Funktion zum Hinzufügen eines Todos
  const addTodo = () => {
    if (todoText.trim() !== "") {
      setTodos([...todos, todoText]);
      setTodoText("");
    }
  };

  // Funktion zum Entfernen eines Todos
  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <h2>Shopping Card</h2>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCard;
