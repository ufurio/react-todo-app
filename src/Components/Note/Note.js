import React from "react";
import "./Note.css";
import { AiOutlineDelete, AiOutlineCheckSquare } from "react-icons/ai";

function Note({ id, text, deleteNote, handleStatus, isCompleted }) {
  return (
    <div className="Note">
      <h2 className={`text ${isCompleted ? "Completed" : ""}`}>{text}</h2>
      <div className="EditRemoveBtn">
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
