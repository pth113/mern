import express, { NextFunction, Request, Response } from "express";
import NoteRoutes from "./routes/notes";
import createHttpError, {isHttpError} from "http-errors";

const app = express();

app.use(express.json());
app.use("/api/notes", NoteRoutes);

app.use((req, res, next) => {
    next(createHttpError(404, "Endpoint not found"));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req:Request, res: Response, next: NextFunction) => {
    console.error(error);
    let message = "Unknow error";
    let statusCode = 500;
    if (isHttpError(error)) {
        message = error.message;
        statusCode = error.status;
    }
    res.status(statusCode).json({error: message});
});

export default app;