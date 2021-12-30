import React, { useState } from "react";

export const Todos = ({todo_list, set_todo_list}) => {
  return (
    <div className = "todoList">
    <h1> Tasks: </h1>
    <ul>
    {todo_list.map(todo => {
      const todoID = String(todo.id);
      return (
        <li key = {todo.id} id = {todoID}>
        <input
        type = "checkbox"
        onClick = {async () => {
          document.getElementById(todoID).style.textDecoration = "line-through";
          await fetch("/delete_todo/" + todo.id, {
            method: "DELETE"
          });
          fetch('/todos').then(response => response.json())
          .then(data => {set_todo_list(data.todos)})
          {/* instead of directly using setTodoList (as for add_todo),
            fetch data from the database because
            no nice way of deleting element from array in JS*/}
          }
        }/>
          <label> {todo.item} </label>
          </li>
        )
      })}
      </ul>
      </div>
      )
}
