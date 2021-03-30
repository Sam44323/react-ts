import React, {useState} from 'react';

import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo'
import {Todo} from './todo.model'

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoValue = (value: string) => {
    setTodos(prevState => [...prevState, {id: Math.random(), text: value}])
  }

  return <div className="App">
      <NewTodo addTodo={addTodoValue}/>
      <TodoList items={todos}/> 
    </div>
}


export default App;
