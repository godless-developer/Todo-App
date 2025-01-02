"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({
    title: "clean home",
    isComplate: false,
  });

  const [activeFilter, setActiveFilter] = useState("all");
  const [taskCompleted, setTaskCompleted] = useState(
    "No tasks yet. Add one above!"
  );
  const [clearCompleted, setClearCompleted] = useState("Clear completed");

  const addTodoHandler = (event) => {
    if (
      event.type === "click" ||
      (event.type === "keydown" && event.key === "Enter")
    )
      //  {
      // if (newTodo !== "") {
      setTodos([...todos, newTodo]);
    // setNewTodo("");
    // }
    // }
  };

  // const checkBoxHandler = () => {};
  // [1,2,3,4,5]
  const deleteHandler = (index) => {
    alert("are you sure to delete ?");
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  useEffect(() => {
    if (todos.length === 0) {
      setTaskCompleted("No tasks yet. Add one above!");
    } else {
      setTaskCompleted(todos.length);
    }
  });

  const clearCompleted = () => {
    if (todos.length === 0) {
      setClearCompleted("Clear completed ");
    } else {
      // setClearCompleted(todos.splice(index, 1)(setTodos([...todos])));
      const haha = (index) => {
        todos.splice(index, 1);
        setTodos([...todos]);
      };

      setClearCompleted(haha, " ");
      alert("Are you sure you want to clear all completed tasks?");
    }
  };

  return (
    <div className={styles.bdy}>
      <div className={styles[`todo-container`]}>
        <h1>To-Do list</h1>
        <div className={`${styles.flex} ${styles["task"]}`}>
          <input
            type="text"
            placeholder="Add a new task..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyDown={addTodoHandler}
          />
          <button onClick={addTodoHandler}>Add</button>
        </div>
        <div className={`${styles.flex} ${styles["sorts"]}`}>
          <div className={styles.all}>
            <button
              className={`${activeFilter == "all" && styles.activeStyle}`}
              onClick={() => setActiveFilter("all")}
            >
              All
            </button>
          </div>
          <div>
            <button
              className={`${activeFilter == "active" && styles.activeStyle}`}
              onClick={() => setActiveFilter("active")}
            >
              Active
            </button>
          </div>
          <div>
            <button
              className={`${activeFilter == "completed" && styles.activeStyle}`}
              onClick={() => setActiveFilter("completed")}
            >
              Completed
            </button>
          </div>
        </div>
        <div>
          {todos.map((todo, index) => (
            <div key={index} className={styles.tasks}>
              <div className={`${styles.flex} ${styles.tasksleft}`}>
                <input type="checkbox" checked={todo.checked} />
                <p>{todo}</p>
              </div>
              <div>
                <button onClick={() => deleteHandler(index)}>Delete</button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.parag}>
          <p>{taskCompleted}</p>
          <button>{clearCompleted}</button>
        </div>

        <div>
          <h4>
            Powered by{" "}
            <span style={{ color: "#3c82f6" }}> Pinecone academy </span>
          </h4>
        </div>
      </div>
    </div>
  );
}

// "use client";
// import { useState } from "react";
// import styles from "./page.module.css";
// // {
// //   todo: "learn react",
// //   isCompleted: false,
// // }

// //string array
// const todos = ["learn react", "learn nodejs"];
// //object array
// const todos1 = [
//   {
//     todo: "learn react",
//     isCompleted: false,
//   },
//   {
//     todos: "learn nodejs",
//     isCompleted: false,
//   },
//   {
//     todos: "learn nodejs 123",
//     isCompleted: false,
//   },
// ];

// export default function Home() {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState();
//   const [activeFilter, setActiveFilter] = useState("all");

//   const addTodoHandler = () => {
//     setTodos([...todos, newTodo]);
//   };
//   const deleteHandler = () => {
//     alert("are you sure to delete ?");
//     setTodos("");
//   };

//   const toggleIsCompleted = (incomingTodo) => {
//     let changedTodos = todos.map((t) => {
//       if (t.todo === incomingTodo.todo) {
//         t.isCompleted = !t.isCompleted;
//       }
//       return t;
//     });
//     setTodos(changedTodos);
//   };

//   return (
//     <div>
//       <div className={styles[`todo-container`]}>
//         <h1>To-Do list</h1>
//         <div className={`${styles.flex} ${styles["bg-blue"]}`}>
//           <input
//             type="text"
//             placeholder="Add a new task"
//             onChange={(e) =>
//               setNewTodo({
//                 todo: e.target.value,
//                 isCompleted: false,
//               })
//             }
//           />
//           <button onClick={addTodoHandler}>Add</button>
//         </div>
//         <div className={`${styles.flex} ${styles.filterButtons}`}>
//           <button
//             className={activeFilter == "all" && styles.activeStyle}
//             onClick={() => setActiveFilter("all")}
//           >
//             All
//           </button>
//           <button
//             className={activeFilter == "active" && styles.activeStyle}
//             onClick={() => setActiveFilter("active")}
//           >
//             Active
//           </button>
//           <button
//             className={activeFilter == "completed" && styles.activeStyle}
//             onClick={() => setActiveFilter("completed")}
//           >
//             Completed
//           </button>
//         </div>
//         <div className={styles.tasks}>
//           {todos.map((todo, index) => (
//             <div className={styles.listCont} key={index}>
//               <div className={styles.listContChild}>
//                 <input
//                   type="checkbox"
//                   onClick={() => toggleIsCompleted(todo)}
//                   checked={todo.isCompleted}
//                 />
//                 <p className={todo.isCompleted ? styles.completed : ""}>
//                   {todo.todo}
//                 </p>
//               </div>
//               <button onClick={() => deleteHandler(index)}>delete</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
