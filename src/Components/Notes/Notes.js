import React, { useContext } from "react";
import classes from "./Notes.module.css";
import Note from "../Note/Note";
import NotesContext from "../../NotesContext";

function Notes() {
    const { notes, deleteNote, updateNote, handleStatus } =
        useContext(NotesContext);
    return (
        <div className={classes.NotesContainer}>
            {notes.map((note) => {
                return (
                    <Note
                        key={note.id}
                        note={note}
                        deleteNote={deleteNote}
                        updateNote={updateNote}
                        handleStatus={handleStatus}
                    />
                );
            })}
        </div>
    );
}

export default Notes;
