import "dotenv/config";
import env from "./utils/validateEnv";
import mongoose from "mongoose";
import app from "./app";

const port = env.PORT;

mongoose.connect(env.MONGO_CONNECTION_STRING)
    .then(() => {
        console.log("Connected mongo DB");
        app.listen(port, () => {
            console.log("Server running on port: " + port);
        });
    })
    .catch(console.error);