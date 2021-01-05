import React, { useState } from "react";
import classes from "./App.module.css";
import Form from "./Components/Form/Form";
import Note from "./Components/Note/Note";

function App() {
  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState("all");
  const [status, setStatus] = useState(false);

  const addNotes = (note) => {
    if (!note.text || /^\s*$/.test(note.text)) {
      return;
    }
    const newNotes = [note, ...notes];
    setNotes(newNotes);
    console.log(notes);
  };

  const deleteNote = (noteID) => {
    const removeNote = notes.filter((note) => {
      return note.id !== noteID;
    });
    setNotes(removeNote);
    console.log("deleted");
  };

  const noteList = notes.map((note) => {
    return (
      <Note
        key={note.id}
        id={note.id}
        text={note.text}
        deleteNote={deleteNote}
        isCompleted={note.isCompleted}
      />
    );
  });

  const handleFilter = (e) => {
    setFilter(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className={classes.MainContainer}>
      <h1>My Notes</h1>
      <Form
        onSubmit={addNotes}
        handleFilter={handleFilter}
        isCompleted={false}
      />
      <div className={classes.NoteContainer}>{noteList}</div>
    </div>
  );
}

export default App;
