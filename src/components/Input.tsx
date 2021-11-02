import React, { useState } from 'react';
import Card from './Card';
import Todo from '../types/Todo';

type Props = {
  onSubmit: (formValues: Todo) => void;
};

const Input: React.FC<Props> = ({ onSubmit }) => {
  const [formValues, setFormValues] = useState<Todo>({
    todo: '',
    date: '',
    priority: '',
    description: '',
  });

  const inputChangeHandler = (event: any): void => {
    setFormValues({ ...formValues, [event.target.id]: event.target.value });
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formValues);
    setFormValues({
      todo: '',
      date: '',
      priority: '',
      description: '',
    });
  };

  return (
    <Card>
      <form onSubmit={submitHandler} className="mb-0 space-y-5">
        <label
          htmlFor="todo"
          className="block text-sm font-medium text-primary"
        >
          Todo
        </label>
        <input
          type="text"
          id="todo"
          onChange={inputChangeHandler}
          value={formValues.todo}
          className="mt-0 block w-full p-1 rounded-md border-2 border-gray-200 shadow-sm focus:border-secondary focus:ring-1 focus:ring-secondary focus:ring-opacity-50 outline-none "
        />

        <label
          htmlFor="date"
          className="block text-sm font-medium text-primary"
        >
          Date
        </label>
        <input
          type="date"
          id="date"
          value={formValues.date}
          onChange={inputChangeHandler}
          className="mt-0 block w-full p-1 rounded-md border-2 border-gray-200 shadow-sm focus:border-secondary focus:ring-1 focus:ring-secondary focus:ring-opacity-50 outline-none "
        />

        <label
          htmlFor="priority"
          className="block text-sm font-medium text-primary"
        >
          Priority
        </label>
        <select
          name="priority"
          id="priority"
          value={formValues.priority}
          onChange={inputChangeHandler}
          className="mt-0 block w-full p-1 rounded-md border-2 border-gray-200 shadow-sm focus:border-secondary focus:ring-1 focus:ring-secondary focus:ring-opacity-50 outline-none "
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <label
          htmlFor="description"
          className="block text-sm font-medium text-primary"
        >
          Description
        </label>
        <textarea
          id="description"
          value={formValues.description}
          onChange={inputChangeHandler}
          className="mt-0 block w-full p-1 rounded-md border-2 border-gray-200 shadow-sm focus:border-secondary focus:ring-1 focus:ring-secondary focus:ring-opacity-50 outline-none "
          rows={3}
        />

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondary hover:bg-primary focus:outline-none "
        >
          Add
        </button>
      </form>
    </Card>
  );
};
export default Input;
