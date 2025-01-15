import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNote, deleteNote } from '../store/NotesSlice'
import { Link, useNavigate, useParams } from 'react-router-dom'

const EditNote = () => {
const dispatch = useDispatch()
const navigate = useNavigate()
const [myNote, setMyNote] = useState('')
const {id} = useParams()
const showSpecificNote = useSelector(store => store.notes.allnotes.find(note => note.id === parseInt(id)))
//  const [newId,setId] = useState(0)
 const clickFun = () => {
 dispatch(deleteNote(parseInt(id)));
  dispatch(
    addNote({
      id: parseInt(id), // Use the generated ID
      note: myNote,
    })
  );
  alert("Note edited successfully");
  setMyNote(""); // Clear the input field
    navigate("/");
};
useEffect(() => {
    setMyNote(showSpecificNote.note)
},[])
  return (
    <div>
        <Link to={'/'} className='float-right bg-green-500 p-2 rounded-lg mr-4 font-medium'>Show Notes</Link>
        <div className='flex flex-col justify-center items-center h-[500px]'>
            <textarea className="w-96 h-48 p-4 bg-dark-2 border-transparent rounded-lg addNote-custom outline-none shadow-md shadow-[#808080] placeholder:text-lg placeholder:font-bold" placeholder="Write your note here..." value={myNote} 
            onChange={(e)=>setMyNote(e.target.value)}></textarea>
            <button className='bg-green-500 p-3 rounded-lg m-2 mt-5' onClick={(e) => clickFun(e)}>Save</button>
        </div>
    </div>
  )
}
export default EditNote