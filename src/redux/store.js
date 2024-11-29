import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./Slices/userSlice";
import notesReducer from "./Slices/notesSlice"

const store = configureStore({
    reducer: {
        user: userReducer,
        notes: notesReducer
    },
});

export default store;