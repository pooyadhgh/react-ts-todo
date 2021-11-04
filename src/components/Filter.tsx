import React, { useContext } from 'react';
import TodoContext from '../context/todo-context';

const Filter: React.FC = () => {
  const todoCtx = useContext(TodoContext);

  return (
    <form className="mb-10 border-b-2 pb-4">
      <label
        htmlFor="priority"
        className="block text-sm font-medium text-primary mb-5"
      >
        Filter Todos
      </label>
      <select
        name="priority"
        id="priority"
        onChange={event => todoCtx?.editFilter(event.target.value)}
        className="mt-0 block w-full p-1 rounded-md border-2 border-gray-200 shadow-sm focus:border-secondary focus:ring-1 focus:ring-secondary focus:ring-opacity-50 outline-none "
      >
        <option value="All">All</option>
        <option value="In progress">In progress</option>
        <option value="Completed">Completed</option>
      </select>
    </form>
  );
};

export default Filter;
