import express from "express";
import { mongoConnection } from "./mongo.connection.js";
import recipiesRouter from "./Routes/recipes.router.js";

const server = express();

server.use (express.json());

server.use(recipiesRouter); 

server.listen(3000, "localhost", async () => {
    console.log(`Server is up and running`);
    await mongoConnection();
})