import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllNotes from "./components/AllNotes";
import ShowNote from "./components/ShowNote";
import AddNote from "./components/AddNote";
import EditNote from "./components/EditNote";
import { useSelector } from "react-redux";
import store from "./store/store";

function App() {
  const isNotesEmpty = useSelector((store) => store.notes.allnotes.length === 0);
  return (
    <div className="App bg-dark h-[100vh]">
      <header className="App-header pt-5">
        <h1 className="text-black font-semibold text-3xl text-center">Quicknotes</h1>
      </header>
      {/* Wrap the entire app in Router */}
      <Router>
        <Routes>
          {/* Define Routes for each component */}
          <Route path="/" element={isNotesEmpty ? <AddNote /> : <AllNotes />} />
          <Route path="/note/:id" element={<ShowNote />} />
          <Route path="/addNote" element={<AddNote />} />
          <Route path="/allNotes" element={<AllNotes />} />
          <Route path="/editNote/:id" element={<EditNote />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
