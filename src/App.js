import React, { useState } from "react";
import classes from "./App.module.css";
import Form from "./Components/Form/Form";
import Note from "./Components/Note/Note";

function App() {
  //STATES

  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState("all");
  const [input, setInput] = useState("");

  //FUNCTIONS

  const addNotes = (note) => {
    if (!note.text || /^\s*$/.test(note.text)) {
      return;
    }
    const newNotes = [note, ...notes];
    setNotes(newNotes);
  };

  const deleteNote = (noteID) => {
    const removeNote = notes.filter((note) => {
      return note.id !== noteID;
    });
    setNotes(removeNote);
    console.log("deleted");
  };

  const handleStatus = (id) => {
    const statusHandler = notes.map((note) => {
      if (note.id === id) {
        return { ...note, isCompleted: !note.isCompleted };
      }
      return note;
    });
    setNotes(statusHandler);
    console.log(statusHandler);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  //ITEM LISTING

  const noteList = notes.map((note) => {
    return (
      <Note
        key={note.id}
        id={note.id}
        text={note.text}
        isCompleted={note.isCompleted}
        deleteNote={deleteNote}
        handleStatus={handleStatus}
      />
    );
  });

  const completedItems = notes.filter((item) => {
    return item.isCompleted === true;
  });

  const completedItemList = completedItems.map((item) => {
    return (
      <Note
        key={item.id}
        id={item.id}
        text={item.text}
        deleteNote={deleteNote}
        handleStatus={handleStatus}
      />
    );
  });

  const unCompletedItems = notes.filter((item) => {
    return item.isCompleted === false;
  });

  const unCompletedItemList = unCompletedItems.map((item) => {
    console.log(unCompletedItems);
    return (
      <Note
        key={item.id}
        id={item.id}
        text={item.text}
        deleteNote={deleteNote}
        handleStatus={handleStatus}
      />
    );
  });

  return (
    <div className={classes.MainContainer}>
      <h1>My Notes</h1>
      <Form
        onSubmit={addNotes}
        handleFilter={handleFilter}
        input={input}
        setInput={setInput}
      />
      <div className={classes.NoteContainer}>
        {filter === "all" && noteList}
        {filter === "completed" && completedItemList}
        {filter === "unCompleted" && unCompletedItemList}
      </div>
    </div>
  );
}

export default App;
