import React, { useState } from 'react';
import { IoMdCloseCircle } from "react-icons/io";

const UpdateNote = ({ setUpdateNote, currentNote }) => {
    const [title, setTitle] = useState(currentNote?.title || "");
    const [content, setContent] = useState(currentNote?.content || "");

    const handleUpdate = (e) => {
        e.preventDefault();
        // const updatedNote = {
        //     id: currentNote.id,
        //     title: title,       
        //     content: content    
        // };
        const updatedNote = { ...currentNote, title, content };
        console.log('Updated Note:', updatedNote);
        setUpdateNote(false);
    };

    return (
        <div className="h-[50vh] flex justify-center items-center">
            <div className="w-3/4 rounded-md bg-gray-300 absolute top-30 mx-auto">
                <div className="flex justify-end p-4 text-red-600 ">
                    <span
                        className="cursor-pointer"
                        onClick={() => setUpdateNote(false)}
                    >
                        <IoMdCloseCircle size={23} />
                    </span>
                </div>
                <div className="px-10 pb-10">
                    <form className="flex flex-col gap-5" onSubmit={handleUpdate}>
                        <h1 className="text-center">Update Note</h1>
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
                            className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                        >
                            Update Note
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateNote;
