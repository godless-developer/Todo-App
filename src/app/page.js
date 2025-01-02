"use client";
import { useEffect, useState } from "react";

import styles from "./page.module.css";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState(""); // initialize as an empty string
  const [activeFilter, setActiveFilter] = useState("all");

  // Add Todo Handler
  const addTodoHandler = () => {
    if (newTodo.trim() === "") return; // Prevent adding empty tasks
    setTodos([...todos, { todo: newTodo, isCompleted: false }]);
    setNewTodo(""); // Reset input after adding
  };

  // Delete Todo Handler
  const deleteHandler = (index) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      const updatedTodos = todos.filter((_, todoIndex) => todoIndex !== index);
      setTodos(updatedTodos);
    }
  };

  // Toggle Completed Handler
  const toggleIsCompleted = (todo) => {
    const updatedTodos = todos.map((t) => {
      if (t.todo === todo.todo) {
        return { ...t, isCompleted: !t.isCompleted };
      }
      return t;
    });
    setTodos(updatedTodos);
  };

  // Filter Todos based on the selected filter
  const filteredTodos = todos.filter((todo) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "active") return !todo.isCompleted;
    if (activeFilter === "completed") return todo.isCompleted;
    return true;
  });

  // Handle Enter key press to add a new todo
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTodoHandler();
    }
  };

  return (
    <div>
      <div className={styles[`todo-container`]}>
        <h1>To-Do list</h1>
        <div className={`${styles.flex} ${styles["bg-blue"]}`}>
          <input
            type="text"
            value={newTodo}
            placeholder="Add a new task"
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyDown={handleKeyDown} // Listen for the Enter key press
          />
          <button onClick={addTodoHandler}>Add</button>
        </div>
        <div className={`${styles.flex} ${styles.filterButtons}`}>
          <button
            className={activeFilter === "all" && styles.activeStyle}
            onClick={() => setActiveFilter("all")}
          >
            All
          </button>
          <button
            className={activeFilter === "active" && styles.activeStyle}
            onClick={() => setActiveFilter("active")}
          >
            Active
          </button>
          <button
            className={activeFilter === "completed" && styles.activeStyle}
            onClick={() => setActiveFilter("completed")}
          >
            Completed
          </button>
        </div>
        <div className={styles.tasks}>
          {filteredTodos.map((todo, index) => (
            <div className={styles.listCont} key={index}>
              <div className={styles.listContChild}>
                <input
                  type="checkbox"
                  onClick={() => toggleIsCompleted(todo)}
                  checked={todo.isCompleted}
                />
                <p className={todo.isCompleted ? styles.completed : ""}>
                  {todo.todo}
                </p>
              </div>
              <button onClick={() => deleteHandler(index)}>delete</button>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
}
