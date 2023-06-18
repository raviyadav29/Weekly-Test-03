import './App.css';
import TodoList from "./Components/TodoList";
import TodoForm from "./Components/TodoForm";
import { TodoProvider } from './Components/TodoContext';

function App() {
  return (
    <TodoProvider>
      <div className="app">
        <h1>Todo App</h1>
        <TodoList />
        <TodoForm />
      </div>
    </TodoProvider>
  );
}

export default App;
