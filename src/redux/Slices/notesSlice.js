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

// create a new note
export const createNote = createAsyncThunk("notes/createNote", async ({ formData, token }, thunkAPI) => {
    try {
        const response = await axios.post("http://127.0.0.1:8000/notebooks/api/note/", formData, {
            headers: {
                Authorization: `Bearer ${token}`, // Sending the user token with the request
            }
        });
        return response.data; // Returning data if the request is successful

    } catch (error) {

        console.error(error)

        return thunkAPI.rejectWithValue(error.response.data)

    }
})

// update a note
export const editNote = createAsyncThunk("notes/editNote", async ({ formData, token, id }, thunkAPI) => {
    try {
        const response = await axios.put(`http://127.0.0.1:8000/notebooks/api/note/${id}/`, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data; // Return data if the note is successfully updated
    } catch (error) {
        console.error("Error updating note:", error.response?.data || error.message);
        return thunkAPI.rejectWithValue(error.response?.data || "Failed to update note");
    }
});

// delete a note
export const deleteNote = createAsyncThunk("notes/deleteNote", async ({ token, id }, thunkAPI) => {
    try {

        console.log("delete note ");

        const response = await axios.delete(`http://127.0.0.1:8000/notebooks/api/note/${id}/`, {
            headers: {
                Authorization: `Bearer ${token}`, // Sending the user token with the request
            },
        }
        );
        return response.data; // Return data if the note is successfully deleted
    } catch (error) {
        console.error("Error deleting note:", error.response?.data || error.message);
        return thunkAPI.rejectWithValue(error.response?.data || "Failed to delete note");
    }
});


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

        // create a new notes
        builder
            .addCase(createNote.pending, (state) => {
                state.status = "loading";
            })
            .addCase(createNote.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.notes.push(action.payload);
            })
            .addCase(createNote.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });

        // update the notes
        builder
            .addCase(editNote.pending, (state) => {
                state.status = "loading";
            })
            .addCase(editNote.fulfilled, (state, action) => {
                state.status = "succeeded";
                const updatedNote = action.payload;
                // Update the note in the list of notes
                const index = state.notes.findIndex(note => note.id === updatedNote.id);
                if (index !== -1) {
                    state.notes[index] = updatedNote;
                }
            })
            .addCase(editNote.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });

        // delete the note
        builder
            .addCase(deleteNote.pending, (state) => {
                state.status = "loading";
            })
            .addCase(deleteNote.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.notes = state.notes.filter(note => note.id !== action.payload.id);
            })
            .addCase(deleteNote.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });


    },
});

// 3. export Reducer
export default notesSlice.reducer;
