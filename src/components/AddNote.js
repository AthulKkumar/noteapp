import React, {useContext, useState} from 'react'
import noteContext from '../context/notes/noteContext'

const AddNote = (props) => {

    const context = useContext(noteContext)
    const { notes, addNote } = context
    
    const [note, setNote] = useState({title: "", description: "", tag: ""})

    const handleClick = (e)=>{
        e.preventDefault()
        addNote(note.title, note.description, note.tag)
        setNote({title: "", description: "", tag: ""})
        props.showAlert("Note Added Successfully", "success")
    }

    const onChanged = (e)=>{
        setNote({...note, [e.target.name]:e.target.value})
    }

    return (
        <div>
            <div className='conatiner my-3'>
                <h1>Add Note</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name='title' value={note.title} minLength={5} required onChange={onChanged} aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" value={note.description} onChange={onChanged} name='description' minLength={5} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="tag" value={note.tag} onChange={onChanged} name='tag' />
                    </div>
                    <button disabled={note.title.length <5 || note.description.length <5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
                </form>
            </div>
        </div>
    )
}

export default AddNote
