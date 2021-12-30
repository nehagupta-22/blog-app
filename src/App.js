import React, { useState, useEffect} from 'react'
import './App.css';
import { TodoForm } from './components/TodoForm.js';
import { Todos } from './components/Todos.js';

function App() {
  const[todoList, setTodoList] = useState([]);
  // initial state is empty array because Todos expects an array as an input,
  // and the initial input to Todos is the initial state

  useEffect(() => {
    fetch('/todos').then(response => response.json())
    .then(data => {setTodoList(data.todos)})
  }, []);
  //.todos because JSON data has the form key : value, todos is the key

  return (
    <div className="App">

    <TodoForm
        onNewTodo = {todo =>
        setTodoList(currentTodos => [...currentTodos, todo])
        }
      />

      <Todos
      todo_list = {todoList}
      set_todo_list = {(data) => setTodoList(data)}
      />

    </div>
  );
}

export default App;
