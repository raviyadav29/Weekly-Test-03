import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { TodoContext } from './TodoContext';

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </div>
  );
};

export default TodoList;

