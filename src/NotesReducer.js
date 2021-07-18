import * as actionTypes from "./NotesActionTypes";

const NotesReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.ADD_NOTE:
            return { ...state, notes: [...state.notes, action.payload] };
        case actionTypes.DELETE_NOTE:
            const newNotes = state.notes.filter(
                (note) => note.id !== action.payload
            );
            return { ...state, notes: newNotes };
        case actionTypes.UPDATE_NOTE:
            return {
                ...state,
                notes: state.notes.map((note) =>
                    note.id === action.payload.updatedNote.id
                        ? { ...note, body: action.payload.updatedNote.body }
                        : note
                ),
            };
        default:
            return state;
    }
};

export default NotesReducer;
