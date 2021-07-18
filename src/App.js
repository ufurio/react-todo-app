import React from "react";
import classes from "./App.module.css";
import Form from "./Components/Form/Form";
import NotesState from "./NotesState";
import Notes from "./Components/Notes/Notes";

function App() {
    return (
        <NotesState>
            <div className={classes.MainContainer}>
                <h1>My Notes</h1>
                <Form />
            </div>
            <Notes />
        </NotesState>
    );
}

export default App;
