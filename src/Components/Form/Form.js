import React, { useState } from "react";
import classes from "./Form.module.css";
import { AiOutlineFileAdd } from "react-icons/ai";

function Form(props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
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
      </form>
    </div>
  );
}

export default Form;
