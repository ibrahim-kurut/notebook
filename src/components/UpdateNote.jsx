import React from 'react'
import { IoMdCloseCircle } from "react-icons/io";

const UpdateNote = ({ setUpdateNote }) => {
    return (
        <div className=" h-[50vh] flex justify-center items-center">
            <div className="w-3/4 rounded-md bg-gray-300 absolute top-30 mx-auto">
                {/* close icon */}
                <div className="flex justify-end p-4 text-red-600 ">
                    <span
                        className="cursor-pointer"
                        onClick={() => setUpdateNote(false)}
                    >
                        <IoMdCloseCircle size={23} />
                    </span>
                </div>
                <div className="px-10 pb-10">
                    <form className=" flex flex-col gap-5">
                        <h1 className="text-center">Update Note</h1>
                        <input type="text" placeholder="Title"
                            className="outline-none py-2 px-4 rounded-md"
                        />
                        <textarea placeholder="Content"
                            className="outline-none py-2 px-4 rounded-md"
                        />
                        <button
                            type='submit'
                            className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                            Update Note
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}



export default UpdateNote