import Todo from '../types/Todo';
import Card from './Card';
import TodoItem from './TodoItem';

const Todolist: React.FC<{ todos: Todo[] }> = ({ todos }) => {
  return (
    <Card>
      <h2 className="block text-md font-semibold text-primary mb-5">
        Todo List
      </h2>

      {todos.length === 0 && (
        <h3 className="text-sm text-primary">No todos, let's add some!</h3>
      )}

      <ul>
        {todos.map((item, index) => (
          <TodoItem key={index} item={item} />
        ))}
      </ul>
    </Card>
  );
};

export default Todolist;
