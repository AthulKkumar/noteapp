import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import NoteState from './context/notes/NoteState';


function App() {
  return (
    <>
      <h1>Note App</h1>
      <NoteState>
      <Router>

        <Navbar />
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />

        </Routes>

      </Router>
      </NoteState>
    </>
  );
}

export default App;
