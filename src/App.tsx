import { useState } from "react";
import "./App.css";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState("");

  // TODO (Task 1): add a new todo using the current input text, then clear the input.
  const addTodo = () => {
    // your code here
  };

  // TODO (Task 2): toggle a todo's `done` flag by id.
  const toggleTodo = (id: number) => {
    // your code here
    void id;
  };

  // TODO (Task 3): remove a todo by id.
  const deleteTodo = (id: number) => {
    // your code here
    void id;
  };

  return (
    <div className="app">
      <h1>My Todos</h1>

      <div className="add-row">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
          placeholder="What needs doing?"
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul className="list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.done ? "item done" : "item"}>
            <span className="text" onClick={() => toggleTodo(todo.id)}>
              {todo.text}
            </span>
            <button className="remove" onClick={() => deleteTodo(todo.id)}>
              ✕
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && <p className="empty">No todos yet — add one above.</p>}
    </div>
  );
}
