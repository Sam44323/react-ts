import React, { useState } from "react";

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo, DeleteMethod, AddTodo } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoValue: AddTodo = (value: string) => {
    setTodos((prevState) => [{ id: Math.random(), text: value }, ...prevState]);
  };

  const deleteTodoAction: DeleteMethod = (id: number) => {
    setTodos((prevState) => prevState.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <NewTodo addTodo={addTodoValue} />
      <TodoList items={todos} deleteTodo={deleteTodoAction} />
    </div>
  );
};

export default App;
