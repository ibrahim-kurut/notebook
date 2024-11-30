import React, { useState } from 'react';
import { IoMdCloseCircle } from "react-icons/io";
import { toast } from 'react-toastify';

import { useDispatch } from 'react-redux';
import { createNote } from "../redux/Slices/notesSlice";

const AddNote = ({ setAddNote, userToken }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const dispatch = useDispatch();

    // handle add note
    const handleAddNote = async (e) => {
        e.preventDefault();

        // validation
        if (title.trim() === "") return toast.error("title is required");
        if (content.trim() === "") return toast.error("content is required");

        const formData = { title, content };

        try {
            await dispatch(createNote({ formData, token: userToken })).unwrap();
            toast.success("Note added successfully");
            setTitle("");
            setContent("");
            setAddNote(false);
        } catch (error) {
            toast.error("Failed to add note");
            console.error(error);
        }
    };

    return (
        <div className=" h-[50vh] flex justify-center items-center">
            <div className="w-3/4 rounded-md bg-gray-300 absolute top-30 mx-auto">
                {/* close icon */}
                <div className="flex justify-end p-4 text-red-600 ">
                    <span
                        className="cursor-pointer"
                        onClick={() => setAddNote(false)}
                    >
                        <IoMdCloseCircle size={23} />
                    </span>
                </div>
                <div className="px-10 pb-10">
                    <form className="flex flex-col gap-5" onSubmit={handleAddNote}>
                        <h1 className="text-center">Add Note</h1>
                        <input
                            type="text"
                            placeholder="Title"
                            className="outline-none py-2 px-4 rounded-md"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <textarea
                            placeholder="Content"
                            className="outline-none py-2 px-4 rounded-md"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                            Add Note
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddNote;
