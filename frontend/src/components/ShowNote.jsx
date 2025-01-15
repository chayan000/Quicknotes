import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export const ShowNote = () => {
    const {id} = useParams()
    const showSpecificNote = useSelector(store => store.notes.allnotes.find(note => note.id === parseInt(id)))
  return (
    <div className='flex justify-center items-center mt-10'>
        <div className='flex flex-col justify-between p-2 items-center w-[700px] h-[400px] bg-slate-700 overflow-hidden'>
            <p className='text-lg font-medium'>{showSpecificNote.note}</p>
            <div>
                <button className='bg-red-500 p-2 rounded-lg m-2'>Delete</button>
                <button className='bg-blue-500 p-2 rounded-lg m-2'>Edit</button>
            </div>
    </div>
    </div>
  )
}
export default ShowNote
