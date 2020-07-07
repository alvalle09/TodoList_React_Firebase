import React, { useState } from "react";
import "./App.css";


function App() {
  const [todos, setTodos] = useState(['Item 1.', 'Item 10002.']);

  return <div className="App">
    <h1>My Todo App ⛏</h1>
    <input/>
    <button>Add Todo</button>

    <ul>
     {todos.map(todo => (
       <li>{todo}</li>
     ))}
    </ul>
  </div>;
}

export default App;
