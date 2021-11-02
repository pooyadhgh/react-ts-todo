import Todo from '../types/Todo';

const TodoItem: React.FC<{ item: Todo }> = ({ item }) => {
  return (
    <li>
      {item.todo} - {item.date}
    </li>
  );
};

export default TodoItem;
