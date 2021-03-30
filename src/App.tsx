import React from 'react';

import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo'

const App: React.FC = () => {
  const todos = [{id: 't1', text: 'Finish the course!'}]

  const addTodoValue = (value: string) => {
    console.log(value);
  }

  return <div className="App">
      <NewTodo addTodo={addTodoValue}/>
      <TodoList items={todos}/> 
    </div>
}


export default App;
