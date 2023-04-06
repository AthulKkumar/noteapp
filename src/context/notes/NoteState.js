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
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxZjAzZDdhOTQxYjllMWU4ODM4OTk3In0sImlhdCI6MTY3OTkyMzEzN30.X-ii4SIcJr8PkyvdLr8thYy11GJZp_ZhERXboEbbsqc"

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
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxZjAzZDdhOTQxYjllMWU4ODM4OTk3In0sImlhdCI6MTY3OTkyMzEzN30.X-ii4SIcJr8PkyvdLr8thYy11GJZp_ZhERXboEbbsqc"

            },
            body: JSON.stringify({title, description, tag}), // body data type must match "Content-Type" header
        });

        const note = {
            "_id": "642531f77afae923bd52e58f",
            "user": "641f03d7a941b9e1e8838997",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-03-30T06:53:43.093Z",
            "__v": 0
        }

        setNote(notes.concat(note))
    }

    //Delete Note
    const deleteNote = async (id) => {

        const response = await fetch(`${host}/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxZjAzZDdhOTQxYjllMWU4ODM4OTk3In0sImlhdCI6MTY3OTkyMzEzN30.X-ii4SIcJr8PkyvdLr8thYy11GJZp_ZhERXboEbbsqc"

            }
        });

        let newNotes = notes.filter((note) => { return note._id != id })
        setNote(newNotes)
    }
    //Edit Note
    const editNote = async (id, title, description, tag) => {

        // const url = notes/updatenote/642290f3564a4ee0fef288bc
        const response = await fetch(`${host}/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxZjAzZDdhOTQxYjllMWU4ODM4OTk3In0sImlhdCI6MTY3OTkyMzEzN30.X-ii4SIcJr8PkyvdLr8thYy11GJZp_ZhERXboEbbsqc"

            },
            body: JSON.stringify({title, description, tag}), // body data type must match "Content-Type" header
        });
        const json = await response.json()
        // console.log(json);

        let newNotes = JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                notes[index].title = title;
                notes[index].description = description;
                notes[index].tag = tag;
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