import React, { useEffect, useState } from 'react';
import styles from './styles/notesPage.module.css';
import {Note as NoteModel} from './models/note';
import Note from './components/Note';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  const [notes, setNotes] = useState<NoteModel[]>([]);
  useEffect(() => {
    async function loadNotes() {
      const response = await fetch("/api/notes", {method: "GET"});
      const notes = await response.json();
      setNotes(notes);
    }
    loadNotes();
  }, []);
  return (
    <Container>
      <Row xs={1} md={2} xl={3} className='g-4'>
        { notes.map(note => (
          <Col key={note._id}>
            <Note note={note} className={styles.note}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
