import React from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import AddNote from './AddNote'
import Noteitem from './Noteitem'

const Notes = () => {

    const context = useContext(noteContext)
    const { notes} = context

    return (
        <div>
            <AddNote />
            <div className='row my-3'>
                <h2>Your Note</h2>
                {notes.map((note) => {
                    // console.log(note);
                    return <Noteitem key={note._id} note={note} />
                })}
            </div>
        </div>
    )
}

export default Notes