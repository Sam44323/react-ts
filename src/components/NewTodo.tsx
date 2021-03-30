import React, {useRef} from 'react';

import {AddTodo} from '../todo.model'

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

  return <form onSubmit={todoSubmitHandler }>
    <div>
      <label htmlFor="todo-text">Todo Text</label>
      <br/>
      <input type="text" name="todo-text" ref={textInputRef}/>
    </div>
    <br/>
    <button type="submit">ADD TODO</button>
  </form>
}

export default NewTodo;