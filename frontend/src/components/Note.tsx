import { Card } from "react-bootstrap";
import styles from "../styles/note.module.css";
import { Note as NoteModel} from "../models/note";
import { formatDate } from "../utils/formatDate";

interface NoteProps {
    note: NoteModel,
    className?: string,
}

const Note = ({note, className}: NoteProps) => {

    let createdUpdatedString: string;
    if (note.createdAt < note.updatedAt) {
        createdUpdatedString = "Updated at: " + formatDate(note.updatedAt);
    } else {
        createdUpdatedString = "Created at: " + formatDate(note.createdAt);
    }

    return (
        <Card className={`${styles.noteCard} ${className}`}>
            <Card.Body className={styles.noteBody}>
                <Card.Title>{note.title}</Card.Title>
                <Card.Text className={styles.noteText}>
                    {note.text}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
                {createdUpdatedString}
            </Card.Footer>
        </Card>
    );
}

export default Note;