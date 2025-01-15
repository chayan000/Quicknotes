import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllNotes from "./components/AllNotes";
import ShowNote from "./components/ShowNote";
import AddNote from "./components/AddNote";

function App() {
  return (
    <div className="App bg-dark h-[100vh]">
      <header className="App-header pt-5">
        <h1 className="text-white text-3xl text-center">Quicknotes</h1>
      </header>
      {/* Wrap the entire app in Router */}
      <Router>
        <Routes>
          {/* Define Routes for each component */}
          <Route path="/" element={<AllNotes />} />
          <Route path="/note/:id" element={<ShowNote />} />
          <Route path="/addNote" element={<AddNote />} />
          <Route path="/allNotes" element={<AllNotes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
