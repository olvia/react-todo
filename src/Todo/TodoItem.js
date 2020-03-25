import React, { useContext } from "react";
import styles from "./TodoItem.css";
import Context from "../context"


export default function TodoItem({ todo, index, onChange }) {
//   console.log("todo", todo);

  const {removeTodo} = useContext(Context)
  const classes = [];
  if (todo.completed) {
    classes.push("done");
  }
  return (
    <li className={"list"}>
      <span className={classes.join(' ')}>
        <input
          type="checkbox"
          checked={todo.completed}
          className={"input"}
          onChange={() => onChange(todo.id)}
        />

        <strong>{index + 1}&nbsp;</strong>
        {todo.title}
      </span>
      <button className={"button"} onClick={() => removeTodo(todo.id)}>&times;</button>
    </li>
  );
}
