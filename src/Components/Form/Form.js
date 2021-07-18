import React, { useState, useContext } from "react";
import classes from "./Form.module.css";
import { AiOutlineFileAdd } from "react-icons/ai";
import NotesContext from "../../NotesContext";

function Form() {
    const { addNote } = useContext(NotesContext);
    const [note, setNote] = useState({
        id: 0,
        body: "",
        isCompleted: false,
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        const newNote = { ...note, id: Math.random() * 100 };
        addNote(newNote);
        setNote({ id: 0, body: "", isCompleted: false });
    };

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setNote({ ...note, [name]: value });
    };

    return (
        <div className={classes.InputContainer}>
            <form className={classes.InputForm} onSubmit={handleSubmit}>
                <input
                    name="body"
                    type="text"
                    placeholder="Enter text"
                    value={note.body}
                    onChange={handleChange}
                />
                <button type="submit">
                    <AiOutlineFileAdd />
                </button>
            </form>
        </div>
    );
}

export default Form;
