import Todo from '../types/Todo';
import Card from './Card';
import TodoItem from './TodoItem';

const Todolist: React.FC<{ todos: Todo[] }> = ({ todos }) => {
  return (
    <Card>
      <ul>
        {todos.map(item => (
          <TodoItem item={item} />
        ))}
      </ul>
    </Card>
  );
};

export default Todolist;
