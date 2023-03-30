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

    return (
        <NoteContext.Provider value={{notes, setNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;