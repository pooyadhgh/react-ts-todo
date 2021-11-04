import { createContext, useState } from 'react';
import Todo from '../types/Todo';

interface TodoContextInterface {
  todos: Todo[];
  filter: string;
  editFilter: (filter: string) => void;
  addTodo: (todo: Todo) => void;
  editTodo: () => void;
  deleteTodo: (id: string) => void;
  completeTodo: (id: string) => void;
  clearAll: () => void;
  completeAll: () => void;
}

const TodoContext = createContext<TodoContextInterface | null>(null);

export const TodoContextProvider: React.FC = ({ children }) => {
  const initialTodos = localStorage.getItem('todos')
    ? JSON.parse(localStorage.getItem('todos') as string)
    : [];

  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [filter, setFilter] = useState<string>('All');

  const addTodoHandler = (todo: Todo) => {
    setTodos(todos => [todo, ...todos]);
    localStorage.setItem('todos', JSON.stringify([todo, ...todos]));
  };

  const deleteHandler = (id: string) => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
    localStorage.setItem('todos', JSON.stringify(filteredTodos));
  };

  const clearAllHandler = () => {
    setTodos([]);
    localStorage.removeItem('todos');
  };

  const completeTodoHandler = (id: string) => {
    const newTodos = todos.map(todo =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const completeAllHandler = () => {
    const newTodos = todos.map(todo => ({ ...todo, isDone: true }));
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const filterTodosHanler = (filter: string) => {
    setFilter(filter);
  };

  const contextValue = {
    todos: todos,
    filter: filter,
    editFilter: filterTodosHanler,
    addTodo: addTodoHandler,
    editTodo: () => {},
    deleteTodo: deleteHandler,
    completeTodo: completeTodoHandler,
    clearAll: clearAllHandler,
    completeAll: completeAllHandler,
  };
  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export default TodoContext;
