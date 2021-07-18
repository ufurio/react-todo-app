import * as actionTypes from "./NotesActionTypes";

const NotesReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.ADD_NOTE:
            return { ...state, notes: [...state.notes, action.payload] };
        case actionTypes.DELETE_NOTE:
            console.log(action.payload);
            const newNotes = state.notes.filter(
                (note) => note.id !== action.payload
            );
            return { ...state, notes: newNotes };
        case actionTypes.UPDATE_NOTE:
            return {
                ...state,
                notes: state.notes.map((note) =>
                    note.id === action.payload.id
                        ? { ...note, body: action.payload.updatedNote.body }
                        : note
                ),
            };
        case actionTypes.HANDLE_STATUS:
            console.log(action.payload);
            return {
                ...state,
                notes: state.notes.map((note) =>
                    note.id === action.payload
                        ? { ...note, isCompleted: !note.isCompleted }
                        : note
                ),
            };
        default:
            return state;
    }
};

export default NotesReducer;
