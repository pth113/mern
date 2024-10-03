import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Note } from './models/note';

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  useEffect(() => {
    async function loadNotes() {
      const response = await fetch("/api/notes", {method: "GET"});
      const notes = await response.json();
      setNotes(notes);
    }
    loadNotes();
  }, []);
  return (
    <div className="App">
      { JSON.stringify(notes) }
    </div>
  );
}

export default App;
