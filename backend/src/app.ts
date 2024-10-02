import express, { NextFunction, Request, Response } from "express";
import NoteModel from "./models/note";
const app = express();

app.get("/", async (req, res, next) => {
    try {
        const notes = await NoteModel.find().exec();
        res.status(200).json(notes);
    } catch(error) {
        next(error);
    }
});

app.use((req, res, next) => {
    console.log('aaa');
    next(Error("Endpoint not found"));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req:Request, res: Response, next: NextFunction) => {
    console.error(error);
    let message = "Unknow error";
    if (error instanceof Error) {
        message = error.message;
    }
    res.status(500).json({error: message});
});

export default app;