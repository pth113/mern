import "dotenv/config";
import env from "./utils/validateEnv";
import mongoose from "mongoose";
import express from "express";
const app = express();
const port = env.PORT;

app.get("/", (req, res) => {
    res.send("Hello World");
});

mongoose.connect(env.MONGO_CONNECTION_STRING)
    .then(() => {
        console.log("Connected mongo DB");
        app.listen(port, () => {
            console.log("Server running on port: " + port);
        });
    })
    .catch(console.error);