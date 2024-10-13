import { Card } from "react-bootstrap";
import styles from "../styles/note.module.css";
import { Note as NoteModel} from "../models/note";

interface NoteProps {
    note: NoteModel,
}

const Note = ({note}: NoteProps) => {
    return (
        <Card>
            <Card.Body className={styles.noteCard}>
                <Card.Title>{note.title}</Card.Title>
                <Card.Text className={styles.noteText}>
                    {note.text}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Note;