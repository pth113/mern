import express from "express";
import * as NotesController from "../controllers/note";

const router = express.Router();
router.get("/", NotesController.getNotes);
router.post("/", NotesController.createNote);
router.get("/:noteId", NotesController.getNote);

export default router