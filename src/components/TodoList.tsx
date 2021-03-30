import React from "react";

import { Todo, DeleteMethod } from "../todo.model";

import styles from "./styles/TodoList.module.css";

interface TodoListProps {
  items: Todo[];
  deleteTodo: DeleteMethod;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul className={styles.uoList}>
      {props.items.map((item) => (
        <li key={item.id} className={styles.listItem}>
          <span className={styles.listText}>{item.text}</span>
          <br />
          <button
            onClick={() => props.deleteTodo(item.id)}
            className={styles.listButton}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
