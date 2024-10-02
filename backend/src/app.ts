import express, { NextFunction, Request, Response } from "express";
import NoteRoutes from "./routes/notes";

const app = express();

app.use("/api/notes", NoteRoutes);

app.use((req, res, next) => {
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