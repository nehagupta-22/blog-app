import React, { useState, useEffect} from 'react'
import './App.css';
import { TodoForm } from './components/TodoForm.js';

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

      <div className = "todoList">
      <h1> Tasks: </h1>
        <ul>
          {todoList.map(todo => {
            return (
              <li key = {todo.id}
              onClick = {async () => {
                await fetch("/delete_todo/" + todo.id, {
                  method: "DELETE"
                });
              fetch('/todos').then(response => response.json())
              .then(data => {setTodoList(data.todos)})
              {/* instead of directly using setTodoList (as for add_todo),
                fetch data from the database because
                no nice way of deleting element from array in JS*/}
            }}>
                {todo.item}
              </li>
            );
          })}
        </ul>
      </div>

    </div>
  );
}

export default App;
