import React, {useRef} from 'react';

import {AddTodo} from '../todo.model'

import styles from './styles/NewTodo.module.css';

interface NewTodoProps{
  addTodo: AddTodo
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
  let textInputRef = useRef<HTMLInputElement >(null);
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    const enteredText: string = textInputRef.current?.value as string;
    props.addTodo(enteredText)
  }

  return <form onSubmit={todoSubmitHandler } className={styles.formSection}>
    <div>
      <label htmlFor="todo-text" className={styles.inputTitle}>Todo Text</label>
      <br/>
      <input type="text" name="todo-text" ref={textInputRef} className={styles.inputField}/>
    </div>
    <br/>
    <button type="submit" className={styles.formButton}>ADD TODO</button>
  </form>
}

export default NewTodo;