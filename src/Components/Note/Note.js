import React from "react";
import "./Note.css";
import { AiOutlineDelete, AiOutlineCheckSquare } from "react-icons/ai";

function Note({ note, updateNote, deleteNote }) {
    return (
        <div className="Note">
            <h2 className={`text ${note.isCompleted ? "Completed" : ""}`}>
                {note.body}
            </h2>
            <div className="EditRemoveBtn">
                <button onClick={() => updateNote(note.id)}>
                    <AiOutlineCheckSquare />
                </button>
                <button onClick={() => deleteNote(note.id)}>
                    <AiOutlineDelete />
                </button>
            </div>
        </div>
    );
}

export default Note;
