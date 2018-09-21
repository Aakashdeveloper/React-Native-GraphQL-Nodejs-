import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import schema from "./graphql/Schema/Schema";
import graphqlHTTP from "express-graphql";

import router from "./routes/routes";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.connect("mongodb://localhost:27017/local");

const db = mongoose.connection;
db.on("error", () => {
  console.log("---FAILED to connect to mongoose");
});
db.once("open", () => {
  console.log("+++Connected to mongoose");
});

app.use(
  "/graphql",
  graphqlHTTP(req => ({
    schema
    //,graphiql:true
  }))
);

app.use("/", router);

app.listen(3001, () => {
  console.log("+++Express Server is Running!!!");
});
