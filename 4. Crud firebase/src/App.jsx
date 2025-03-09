import "./App.css";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  QuerySnapshot,
} from "firebase/firestore";
import { db } from "./data/firebase";
import { useEffect, useState } from "react";
import Title from "./components/Title";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (QuerySnapshot) => {
      let todosArray = [];
      QuerySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);

  const handleEdit = async (todos, title) => {
    await updateDoc(doc(db, "todos", todos.id), { title: title });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  const toggleComplete=async(todo)=>{
    await updateDoc(doc(db,"todos", todo.id),{completed:!todo.completed})
  }
  return (
    <>
      <div>
        <Title />
      </div>
      <div>
        <AddTodo/>
      </div>
      <div className="todo_container">
        {todos.map((todo)=>(
          <Todo todo={todo}
          handleDelete={handleDelete}
          toggleComplete={toggleComplete}
          handleEdit={handleEdit}
          />
        ))}
      </div>
    </>
  );
}

export default App;
