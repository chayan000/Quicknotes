import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "notes",
  initialState: {
    allnotes: [
      { id: 1, note: "This is a sample note" },
      { id: 2, note: "This is another sample note" },
      { id: 3, note: "This is a third sample note" },
    ],
  },
  reducers: {
    addNote: (state, action) => {
      state.allnotes.push(action.payload); // Correct key is "allnotes"
    },
    deleteNote: (state, action) => {
      state.allnotes = state.allnotes.filter((note) => note.id !== action.payload);
    },
    updateNote: (state, action) => {
      state.allnotes = state.allnotes.map((note) =>
        note.id === action.payload.id ? action.payload : note
      );
    },
  },
});

export const { addNote, deleteNote, updateNote } = noteSlice.actions;
export default noteSlice.reducer;
