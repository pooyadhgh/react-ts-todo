import React, { useState } from 'react';

type Todo = {
  todo: string;
  date: string;
  priority: string;
  description: string;
};

const Input: React.FC = () => {
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
    console.log(formValues);
  };

  return (
    <section>
      <form onSubmit={submitHandler}>
        <label htmlFor="todo">Todo</label>
        <input
          type="text"
          id="todo"
          onChange={inputChangeHandler}
          value={formValues.todo}
        />

        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          value={formValues.date}
          onChange={inputChangeHandler}
        />

        <label htmlFor="priority">Priority</label>
        <select
          name="priority"
          id="priority"
          value={formValues.priority}
          onChange={inputChangeHandler}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={formValues.description}
          onChange={inputChangeHandler}
        />

        <button type="submit">Add</button>
      </form>
    </section>
  );
};
export default Input;
