import React, { useState } from "react";
import classes from "./App.module.css";
import Form from "./Components/Form/Form";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

function App() {
  const [notes, setNotes] = useState([]);

  const addNotes = (note) => {
    if (!note.text || /^\s*$/.test(note.text)) {
      return;
    }
    const newNotes = [note, ...notes];
    setNotes(newNotes);
  };

  const deleteNote = (noteID) => {
    const filteredNotes = notes.filter((note) => {
      return note.id !== noteID;
    });
    setNotes(filteredNotes);
    console.log(notes);
  };

  const noteList = notes.map((notes) => {
    return (
      <div className={classes.Note}>
        {notes.text}
        <div className={classes.EditRemoveBtn}>
          <button>
            <AiOutlineEdit />
          </button>
          <button>
            <AiOutlineDelete onClick={() => deleteNote(notes.id)} />
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className={classes.MainContainer}>
      <h1>My Notes</h1>
      <Form onSubmit={addNotes} />
      <div className={classes.NoteContainer}>{noteList}</div>
    </div>
  );
}

export default App;
