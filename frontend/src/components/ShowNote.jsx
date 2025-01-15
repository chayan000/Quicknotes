import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { deleteNote } from '../store/NotesSlice'

export const ShowNote = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const showSpecificNote = useSelector(store => store.notes.allnotes.find(note => note.id === parseInt(id)))
      const deleteOneNote = (id, e) => {
        e.preventDefault(); // Prevent the Link navigation
        e.stopPropagation(); // Stop event propagation
        console.log(id);
        dispatch(deleteNote(parseInt(id)));
        alert("Note deleted successfully");
        navigate("/");
      };
      if (!showSpecificNote) {
        return (
          <div className="flex justify-center items-center mt-10">
            <div className="p-5 bg-red-500 text-white rounded-lg">
              <p>Note not found. It may have been deleted.</p>
              <Link to="/" className="bg-green-500 p-2 rounded-lg mt-2">
                Go Back to All Notes
              </Link>
            </div>
          </div>
        );
      }
    return (
    <div className='flex justify-center items-center mt-10'>
        <div className='flex flex-col justify-between p-2 items-center w-[700px] h-[400px] bg-slate-700 overflow-hidden'>
            <p className='text-lg font-medium'>{showSpecificNote.note}</p>
            <div>
            <button to={'/'}
                className="bg-red-500 p-2 rounded-lg m-2"
                onClick={(e) => deleteOneNote(id, e)} // Properly pass `id` and prevent recursion
              >
                Delete
              </button>
                <Link to={"/editNote/"+id} className="bg-blue-500 p-2 rounded-lg m-2">Edit</Link>
            </div>
    </div>
    </div>
  )
}
export default ShowNote
