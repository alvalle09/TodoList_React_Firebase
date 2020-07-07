import React, { useState } from "react";
import "./App.css";


function App() {
  const [todos, setTodos] = useState(['Item 1.', 'Item 10002.']);
  const [input, setInput] = useState('');
  console.log('🪓' + input)

  const addTodo = (event) => {
    // this fires on Add Todo button click
    event.preventDefault();
    console.log('👽', 'Work!!!');
    setTodos([...todos, input]);
    setInput('');
  }
  return <div className="App">
    <h1>My Todo App ⛏</h1>
    <form>
      <input value={input} onChange={event => setInput(event.target.value)} />
      <button type="submit" onClick={addTodo}>Add Todo</button>
    </form>
    
    <ul>
     {todos.map(todo => ( 
       <li>{todo}</li>
     ))}
    </ul>
  </div>;
}

export default App;
