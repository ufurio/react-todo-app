import React from "react";
import classes from "./Note.module.css";
import { AiOutlineDelete, AiOutlineCheckSquare } from "react-icons/ai";

function Note({ id, text, deleteNote, handleStatus }) {
  return (
    <div className={classes.Note}>
      {text}
      <div className={classes.EditRemoveBtn}>
        <button>
          <AiOutlineCheckSquare onClick={() => handleStatus(id)} />
        </button>
        <button>
          <AiOutlineDelete onClick={() => deleteNote(id)} />
        </button>
      </div>
    </div>
  );
}

export default Note;
