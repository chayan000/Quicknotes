import {configureStore } from '@reduxjs/toolkit';
import noteSlice from './NotesSlice';
const store = configureStore({
    reducer: {
        notes: noteSlice,
    }
});
export default store;