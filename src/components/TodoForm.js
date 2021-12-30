import React, { useState } from "react";

export const TodoForm = ({ onNewTodo }) => {
  const [item, setItem] = useState("");

  return (
    <form>
        <input
          placeholder="New task"
          value={item}
          onChange={event => setItem(event.target.value)}
        />
        <input
          type = "submit"
          value = "Add"
          onClick={async () => {
            const todo = { item };
            await fetch("/add_todo", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(todo)
            });
              onNewTodo(todo);
              setItem("");
          }}
        />
    </form>
  );
};
