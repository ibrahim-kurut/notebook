import React from 'react'
import { IoMdCloseCircle } from "react-icons/io";

const AddNote = ({ setAddNote }) => {
    return (
        <div className=" h-[50vh] flex justify-center items-center">
            <div className="w-1/2 rounded-md bg-gray-300 absolute mx-auto opacity-80">
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
                    <form className=" flex flex-col gap-5">
                        <h1 className="text-center">Add Note</h1>
                        <input type="text" placeholder="Title"
                            className="outline-none py-2 px-4 rounded-md"
                        />
                        <textarea placeholder="Content"
                            className="outline-none py-2 px-4 rounded-md"
                        />
                        <button
                            type='submit'
                            className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                            Add Note
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddNote