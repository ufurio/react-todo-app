import React from "react";
import classes from "./Form.module.css";
import { AiOutlineFileAdd } from "react-icons/ai";

function Form({ onSubmit, handleFilter, input, setInput }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    });
    setInput("");
  };

  const handleInput = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  return (
    <div className={classes.InputContainer}>
      <form className={classes.InputForm} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter text"
          value={input}
          onChange={handleInput}
        />
        <button type="submit">
          <AiOutlineFileAdd />
        </button>
        <select onChange={handleFilter}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="unCompleted">Uncompleted</option>
        </select>
      </form>
    </div>
  );
}

export default Form;
