import { RequestHandler } from "express";
import NoteModel from "../models/note";
import mongoose from "mongoose";

export const getNotes: RequestHandler = async (req, res, next) => {
    try {
        const notes = await NoteModel.find().exec();
        res.status(200).json(notes);
    } catch(error) {
        next(error);
    }
}

export const getNote: RequestHandler = async (req, res, next) => {
    const noteId = req.params.noteId;
    try {
        if (!mongoose.isValidObjectId(noteId)) {
            throw Error("noteId is invalid object id");
        }
        const note = await NoteModel.findById(noteId).exec();
        if (!note) {
            throw Error("note not found");
        }
        res.status(200).json(note);
    } catch(error) {
        next(error);
    }
}

interface NoteRequestBody  {
    title : string,
    text? : string,
}

export const createNote: RequestHandler<unknown, unknown, NoteRequestBody, unknown> = async (req, res, next) => {
    const {title, text} = req.body;
    try {
        if (!title) {
            throw Error("Title missing");
        }
        const newNote = await NoteModel.create({
            title, text
        });
        res.status(201).json(newNote);
    } catch(error) {
        next(error);
    }
}