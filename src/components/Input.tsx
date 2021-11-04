import React, { useContext } from 'react';
import Card from './Card';
import { v4 as uuidv4 } from 'uuid';
import TodoContext from '../context/todo-context';
import useInput from '../hooks/use-input';

const Input: React.FC = () => {
  const todoCtx = useContext(TodoContext);

  const {
    value: todo,
    valueChangeHandler: todoChangedHandler,
    inputBlurHandler: todoBlurHandler,
    isValid: todoIsValid,
    hasError: todoHasError,
    reset: resetTodo,
  } = useInput((value: string) => value.trim().length >= 3);

  const {
    value: date,
    valueChangeHandler: dateChangedHandler,
    inputBlurHandler: dateBlurHandler,
    isValid: dateIsValid,
    hasError: dateHasError,
    reset: resetDate,
  } = useInput((value: string) => value.trim() !== '');

  const {
    value: priority,
    valueChangeHandler: priorityChangedHandler,
    reset: resetPriority,
  } = useInput((value: string) => value);

  const {
    value: description,
    valueChangeHandler: descriptionChangedHandler,
    inputBlurHandler: descriptionBlurHandler,
    isValid: descriptionIsValid,
    hasError: descriptionHasError,
    reset: resetDescription,
  } = useInput((value: string) => value.trim().length >= 3);

  let formIsValid = false;

  if (todoIsValid && dateIsValid && descriptionIsValid) formIsValid = true;

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTodo = {
      id: uuidv4(),
      todo: todo!,
      date: date!,
      description: description!,
      priority: priority!,
      isDone: false,
    };

    todoCtx?.addTodo(newTodo);

    resetTodo();
    resetDate();
    resetDescription();
    resetPriority();
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
          onChange={todoChangedHandler}
          value={todo}
          onBlur={todoBlurHandler}
          className={`mt-0 block w-full p-1 rounded-md border-2 border-gray-200 shadow-sm focus:border-secondary focus:ring-1 focus:ring-secondary focus:ring-opacity-50 outline-none ${
            todoHasError && 'ring-secondary ring-1'
          }`}
        />

        {todoHasError && (
          <p className="text-sm text-secondary">
            Please enter at least 3 words
          </p>
        )}

        <label
          htmlFor="date"
          className="block text-sm font-medium text-primary"
        >
          Date
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={dateChangedHandler}
          onBlur={dateBlurHandler}
          className={`mt-0 block w-full p-1 rounded-md border-2 border-gray-200 shadow-sm focus:border-secondary focus:ring-1 focus:ring-secondary focus:ring-opacity-50 outline-none ${
            dateHasError && 'ring-secondary ring-1'
          }`}
        />

        {dateHasError && (
          <p className="text-sm text-secondary">Please choose a date</p>
        )}

        <label
          htmlFor="priority"
          className="block text-sm font-medium text-primary"
        >
          Priority
        </label>
        <select
          name="priority"
          id="priority"
          value={priority}
          onChange={priorityChangedHandler}
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
          value={description}
          onChange={descriptionChangedHandler}
          onBlur={descriptionBlurHandler}
          className={`mt-0 block w-full p-1 rounded-md border-2 border-gray-200 shadow-sm focus:border-secondary focus:ring-1 focus:ring-secondary focus:ring-opacity-50 outline-none ${
            descriptionHasError && 'ring-secondary ring-1'
          }`}
          rows={3}
        />
        {descriptionHasError && (
          <p className="text-sm text-secondary">
            Please enter at least 3 words
          </p>
        )}

        <button
          disabled={!formIsValid}
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondary hover:bg-primary focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-primary"
        >
          Add
        </button>
      </form>
    </Card>
  );
};
export default Input;
