import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNote } from '../store/NotesSlice'
import { Link, useNavigate } from 'react-router-dom'

const AddNote = () => {
 const dispatch = useDispatch()
 const navigate = useNavigate()
 const [myNote, setMyNote] = useState('')
//  const [newId,setId] = useState(0)
 const clickFun = () => {
  const uniqueId = Date.now(); // Generate the unique ID here
  dispatch(
    addNote({
      id: uniqueId, // Use the generated ID
      note: myNote,
    })
  );
  alert("Note added successfully");
  setMyNote(""); // Clear the input field
  navigate("/");
};
  return (
    <div>
        <Link to={'/'} className='float-right bg-green-500 p-2 rounded-lg mr-4 font-medium'>Show Notes</Link>
        <div className='flex flex-col justify-center items-center h-[500px]'>
            <textarea className="w-96 h-48 p-4 bg-dark-2 border-transparent rounded-lg addNote-custom outline-none shadow-md shadow-[#808080] placeholder:text-lg placeholder:font-bold" placeholder="Write your note here..." value={myNote} 
            onChange={(e)=>setMyNote(e.target.value)}></textarea>
            <button className='bg-green-500 p-3 rounded-lg m-2 mt-5' onClick={(e) => clickFun(e)}>Add Note</button>
        </div>
    </div>
  )
}

export default AddNote