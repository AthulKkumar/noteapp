import React, {useContext, useEffect} from 'react'
import noteContext from '../context/notes/noteContext'

const About = () => {
    const a = useContext(noteContext)

    useEffect(()=>{
        a.update()
    },[])

  return (
    <div>
      <h2>About{a.state.name}</h2>
    </div>
  )
}

export default About
