import React, { useReducer } from "react";
import * as actionTypes from "./NotesActionTypes";
import NotesReducer from "./NotesReducer";
import NotesContext from "./NotesContext";

const NotesState = (props) => {
    const INITIAL_STATE = {
        notes: [],
    };

    const [state, dispatch] = useReducer(NotesReducer, INITIAL_STATE);

    const addNote = (newNote) => {
        return dispatch({
            type: actionTypes.ADD_NOTE,
            payload: newNote,
        });
    };

    const deleteNote = (id) => {
        return dispatch({
            type: actionTypes.DELETE_NOTE,
            payload: id,
        });
    };

    const updateNote = (updatedNote) => {
        return dispatch({
            type: actionTypes.UPDATE_NOTE,
            payload: updatedNote,
        });
    };

    return (
        <NotesContext.Provider
            value={{
                notes: state.notes,
                addNote,
                deleteNote,
                updateNote,
            }}
        >
            {props.children}
        </NotesContext.Provider>
    );
};

export default NotesState;
