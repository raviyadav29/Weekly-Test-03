import React, { useContext } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { TodoContext } from './TodoContext';

const TodoItem = ({ todo, index }) => {
  const { deleteTodo, toggleTodo } = useContext(TodoContext);

  const handleDelete = () => {
    deleteTodo(index);
  };

  const handleToggle = () => {
    toggleTodo(index);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span className="todo-title" onClick={handleToggle}>
        {todo.title}
      </span>
      <div className="todo-actions">
        <FaEdit className="edit-icon" />
        <FaTrashAlt className="delete-icon" onClick={handleDelete} />
      </div>
    </div>
  );
};

export default TodoItem;

