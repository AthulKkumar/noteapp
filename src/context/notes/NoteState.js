import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

    const noteInitial = [
        {
            "_id": "642290f3564a4ee0fef288bc",
            "user": "641f03d7a941b9e1e8838997",
            "title": "Dj sarambaje bajea",
            "description": "Mathe presu sollu dj...sai",
            "tag": "Fansty",
            "date": "2023-03-28T07:02:11.647Z",
            "__v": 0
        },
        {
            "_id": "642531f57afae923bd52e58d",
            "user": "641f03d7a941b9e1e8838997",
            "title": "Dj sarambaje",
            "description": "Mathe presu sollu",
            "tag": "Fansty",
            "date": "2023-03-30T06:53:41.736Z",
            "__v": 0
        },
        {
            "_id": "642531f77afae923bd52e58f",
            "user": "641f03d7a941b9e1e8838997",
            "title": "Dj sarambaje",
            "description": "Mathe presu sollu",
            "tag": "Fansty",
            "date": "2023-03-30T06:53:43.093Z",
            "__v": 0
        }
    ]

    const [notes, setNote] = useState(noteInitial)

    //Add Note
    const addNote = (title, description, tag) => {

        const note =  {
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
    const deleteNote = (id) => {
        let newNotes = notes.filter((note)=>{ return note._id != id})
        setNote(newNotes)
    }
    //Edit Note
    const editNote = () => {

    }
    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;