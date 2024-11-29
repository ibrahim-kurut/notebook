import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import AddNote from "./AddNote";
import UpdateNote from "./UpdateNote";

// import data from '../data'
import swal from "sweetalert";


import { useDispatch, useSelector } from "react-redux";
import { fetchUserNotes } from "../redux/Slices/notesSlice";

const Table = ({ userToken }) => {


    const dispatch = useDispatch();
    const { notes } = useSelector((state) => state.notes);




    const [searchItem, setSearchItem] = useState(""); // Girilen metnin saklanma durumu
    const [filteredNotes, setFilteredNotes] = useState(notes); // Görüntülenen öğelerin durumu
    const [addNote, setAddNote] = useState(false);
    const [updateNote, setUpdateNote] = useState(false);

    const [currentNote, setCurrentNote] = useState(null);


    useEffect(() => {
        dispatch(fetchUserNotes(userToken));
    }, [dispatch, userToken]);

    useEffect(() => {
        setFilteredNotes(notes);
    }, [notes]);

    // handel delete item
    const handleDelete = (id) => {




        swal({
            title: "Are you sure?",
            text: `Do you want to delete this note? ${id}`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                    setFilteredNotes((prevNotes) =>
                        prevNotes.filter((note) => note.id !== id)
                    );
                } else {
                    swal("Your imaginary file is safe!");
                }
            });
    };

    // handel edit item
    const handleEdit = (note) => {
        setCurrentNote(note);
        setUpdateNote(true);
    };

    // handel search item
    const handleSearch = () => {

        const result = notes.filter((note) =>
            note.title.toLowerCase().includes(searchItem.toLowerCase())
        );
        setFilteredNotes(result); // Görüntüleme listesini güncelle

        if (result.length === 0) {
            console.log("data bulunanadi");
        }

    };

    return (
        <div className="container mx-auto py-6 min-h-screen">
            <div className="flex items-center justify-between mb-4">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={() => setAddNote(true)}
                >
                    Add
                </button>
                <input
                    type="text"
                    placeholder="Please enter title"
                    className="flex flex-1 ml-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={searchItem}
                    onChange={(e) => setSearchItem(e.target.value)}
                />
                <button
                    className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full bg-gray-200 border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-300">
                            <th className="font-normal border border-gray-400 px-4 py-2 w-[150px]">Title</th>
                            <th className="font-normal border border-gray-400 px-4 py-2">Content</th>
                            <th className="font-normal border border-gray-400 px-4 py-2 w-[150px]">Created At</th>
                            <th className="font-normal border border-gray-400 px-4 py-2 w-[100px]">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredNotes.length === 0 ?
                                (
                                    <p className="text-center text-lg text-red-600 capitalize">
                                        Data not found
                                    </p>
                                )
                                :
                                (
                                    filteredNotes.map((item, index) => {
                                        const dateString = item?.created_at; // ISO şeklinde tarih
                                        const date = new Date(dateString); // Diziyi bir tarih nesnesine dönüştürün
                                        const formattedDate = date.toISOString().split('T')[0];
                                        console.log(formattedDate);

                                        return (
                                            <tr key={index} className="text-center">
                                                <td className="border border-gray-400 px-4 py-2">{item?.title}</td>
                                                <td className="border border-gray-400 px-4 py-2">{item?.content}</td>
                                                <td className="border border-gray-400 px-4 py-2">{formattedDate}</td>
                                                <td className="border border-gray-400 px-4 py-2 flex justify-center gap-2">
                                                    <button className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                                                        onClick={() => handleEdit(item)}
                                                    >
                                                        <FaRegEdit />
                                                    </button>
                                                    <button
                                                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                                        onClick={() => handleDelete(item.id)}
                                                    >
                                                        <RiDeleteBin6Line />
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                )
                        }
                    </tbody>
                </table>

                {
                    addNote && <AddNote setAddNote={setAddNote} />
                }

                {updateNote && <UpdateNote setUpdateNote={setUpdateNote} currentNote={currentNote} />}

            </div>
        </div>
    );
};


export default Table

// butun data`yi (filteredNotes) verdik ve map ile donguye soktuk
// eger handelSearch faction calisirsa (setFilteredNotes) guncelleriz ve sadece aranan data bize doner