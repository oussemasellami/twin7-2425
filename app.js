const express = require("express");
const http = require("http");
const mongo = require("mongoose");
const bodyparser = require("body-parser");
const db = require("./config/dbconnection.json");
mongo
  .connect(db.url)
  .then(() => {
    console.log("database connect");
  })
  .catch((err) => {
    console.log(err);
  });

const userRouter = require("./routes/users");
const app = express();
app.use(express.json());
app.use("/users", userRouter);

//app.use(bodyparser.json());
const server = http.createServer(app, console.log("server run"));
server.listen(3000);
