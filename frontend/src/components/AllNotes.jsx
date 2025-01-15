import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../store/NotesSlice";
import { Link } from "react-router-dom";

const AllNotes = () => {
  const dispatch = useDispatch();
  const showNotes = useSelector((store) => store.notes.allnotes);

  const deleteNoteHandler = (id, e) => {
    e.stopPropagation(); // Prevent the Link click event from firing
    dispatch(deleteNote(id)); // Dispatch delete note action with correct id
  };

  return (
    <div>
      <Link to={"/addNote"} className="float-right bg-green-500 p-2 rounded-lg mr-4 font-medium">
        Add Note
      </Link>
      <div className="flex h-[500px] gap-3 p-5 flex-wrap">
        {showNotes.map((note) => (
          <div
            key={note.id}
            className="flex flex-col justify-between p-2 items-center w-[300px] h-[200px] bg-slate-700 overflow-hidden"
          >
            <Link
              to={"/note/" + note.id}
              className="text-lg font-medium mb-4 text-center block"
            >
              {note.note}
            </Link>
            <div>
              <button
                className="bg-red-500 p-2 rounded-lg m-2"
                onClick={(e) => deleteNoteHandler(note.id, e)} // Properly pass `id` and prevent recursion
              >
                Delete
              </button>
              <button className="bg-blue-500 p-2 rounded-lg m-2">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllNotes;
