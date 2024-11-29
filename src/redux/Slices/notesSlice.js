import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 1. get notes from server
export const fetchUserNotes = createAsyncThunk("notes/fetchUserNotes",
    async (token, thunkAPI) => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/notebooks/api/note/", {
                headers: {
                    Authorization: `Bearer ${token}`, // Sending the user token with the request
                },
            });
            return response.data; // Returning data if the request is successful
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data); // Return the error
        }
    }
);

// 2. definition of Slice to manage data status
const notesSlice = createSlice({
    name: "notes",
    initialState: {
        notes: [],
        status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserNotes.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchUserNotes.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.notes = action.payload;
            })
            .addCase(fetchUserNotes.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    },
});

// 3. export Reducer
export default notesSlice.reducer;
