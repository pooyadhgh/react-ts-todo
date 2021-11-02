import Todo from '../types/Todo';
import Card from './Card';
import TodoItem from './TodoItem';

const Todolist: React.FC<{ todos: Todo[] }> = ({ todos }) => {
  return (
    <Card>
      <ul>
        {todos.map((item, index) => (
          <TodoItem key={index} item={item} />
        ))}
      </ul>
    </Card>
  );
};

export default Todolist;
