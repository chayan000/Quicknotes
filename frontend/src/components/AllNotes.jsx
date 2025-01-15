import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../store/NotesSlice";
import { Link } from "react-router-dom";

const AllNotes = () => {
  const dispatch = useDispatch();
  const showNotes = useSelector((store) => store.notes.allnotes);

  const deleteNoteHandler = (id, e) => {
    e.preventDefault(); // Prevent the Link navigation
    e.stopPropagation(); // Stop event propagation
    dispatch(deleteNote(id));
  };
  return (
    <div>
      <Link to={"/addNote"} className="float-right bg-green-500 p-2 rounded-lg mr-4 font-medium">
        Add Note
      </Link>
      <div className="flex h-[500px] gap-3 p-5 flex-wrap">
        {showNotes.map((note) => (
          <Link to={"/note/" + note.id}
          key={note.id}
          className="flex flex-col justify-between p-2 items-center w-[300px] h-[200px] bg-slate-900 overflow-hidden rounded-lg shadow-lg shadow-black"
          >
            <div
              // to={"/note/" + note.id}
              className="text-lg font-medium mb-4 text-center block"
            >
              {note.note}
            </div>
            <div>
              <button
                className="bg-red-500 p-2 rounded-lg m-2"
                onClick={(e) => deleteNoteHandler(note.id, e)} // Properly pass `id` and prevent recursion
              >
                Delete
              </button>
              <Link to={"/editNote/"+note.id} className="bg-blue-500 p-2 rounded-lg m-2">Edit</Link>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllNotes;
