import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

    const host = 'http://localhost:5000'
    const noteInitial = []

    const [notes, setNote] = useState(noteInitial)

     //Get Note
     const getNotes = async () => {

        const response = await fetch(`${host}/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')

            }
        });

        const json = await response.json()
        // console.log(json);
        setNote(json)
    }

    //Add Note
    const addNote = async (title, description, tag) => {

        const response = await fetch(`${host}/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')

            },
            body: JSON.stringify({title, description, tag}), // body data type must match "Content-Type" header
        });

        const note = await response.json()

        setNote(notes.concat(note))
    }

    //Delete Note
    const deleteNote = async (id) => {

        const response = await fetch(`${host}/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')

            }
        });

        let newNotes = notes.filter((note) => { return note._id !== id })
        setNote(newNotes)
    }
    //Edit Note
    const editNote = async (id, title, description, tag) => {

        // const url = notes/updatenote/642290f3564a4ee0fef288bc
        const response = await fetch(`${host}/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')

            },
            body: JSON.stringify({title, description, tag}), // body data type must match "Content-Type" header
        });
        const json = await response.json()
        // console.log(json);

        let newNotes = JSON.parse(JSON.stringify(notes))
        // console.log(newNotes);
        for (let index = 0; index < notes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }

        }
        setNote(newNotes)
    }
    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;