import { useContext } from 'react';
import TodoContext from '../context/todo-context';
import Card from './Card';
import TodoItem from './TodoItem';

const Todolist: React.FC = () => {
  const todoCtx = useContext(TodoContext);
  const todos = todoCtx?.todos;

  if (todos?.length === 0)
    return (
      <Card>
        <h3 className="text-sm text-primary">No todos, let's add some!</h3>
      </Card>
    );

  return (
    <Card>
      <h2 className="block text-md font-semibold text-primary mb-5">
        Todo List
      </h2>

      <ul>
        {todos?.map((item, index) => (
          <TodoItem key={index} item={item} />
        ))}
      </ul>

      <button
        onClick={todoCtx?.completeAll}
        className="text-sm text-primary hover:text-secondary m-2 ml-0"
      >
        <i className="fas fa-check p-1"></i>
        Complete All
      </button>

      <button
        onClick={todoCtx?.clearAll}
        className="text-sm text-primary hover:text-secondary m-2"
      >
        <i className="far fa-trash-alt p-1"></i> Clear All
      </button>
    </Card>
  );
};

export default Todolist;
