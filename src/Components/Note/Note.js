import React from "react";
import classes from "./Note.module.css";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

function Note({ id, text, deleteNote, isCompleted }) {
  const handleProgress = (e) => {
    if (isCompleted === false) {
      isCompleted = true;
    } else {
      isCompleted = false;
    }
    console.log({ isCompleted });
  };

  return (
    <div className={classes.Note}>
      {text}
      <div className={classes.EditRemoveBtn}>
        <button>
          <AiOutlineEdit onClick={() => handleProgress(isCompleted)} />
        </button>
        <button>
          <AiOutlineDelete onClick={() => deleteNote(id)} />
        </button>
      </div>
    </div>
  );
}

export default Note;
