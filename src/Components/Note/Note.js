import React from "react";
import classes from "./Note.module.css";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

function Note({ id, text, deleteNote }) {
  return (
    <div className={classes.Note}>
      {text}
      <div className={classes.EditRemoveBtn}>
        <button>
          <AiOutlineEdit />
        </button>
        <button>
          <AiOutlineDelete onClick={() => deleteNote(id)} />
        </button>
      </div>
    </div>
  );
}

export default Note;
