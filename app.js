const express = require("express");
const http = require("http");
const mongo = require("mongoose");
const path = require("path");
const bodyparser = require("body-parser");
const { addchat } = require("./controller/userController");
const {
  addpartiesocket,
  affichesocket,
} = require("./controller/PartieController");
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
const productRouter = require("./routes/products");
const partieRouter = require("./routes/partie");
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "twig");
app.use(express.json());
app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/partie", partieRouter);

//app.use(bodyparser.json());
const server = http.createServer(app, console.log("server run"));
const io = require("socket.io")(server);
io.on("connection", (socket) => {
  console.log("user connected");

  socket.emit("msg", "user connected");

  socket.on("aff", async (data) => {
    const datanew = await affichesocket(data);
    console.log("datanew : " + JSON.stringify(datanew));
    io.emit("aff", datanew);
  });

  socket.on("partie", (data) => {
    addpartiesocket(data);
    io.emit("partie", data);
  });
  socket.on("msgname", (data) => {
    addchat(data);
    io.emit("msgname", data);
  });
  socket.on("typing", (data) => {
    socket.broadcast.emit("typing", data);
  });

  socket.on("disconnect", () => {
    io.emit("msg", "user disconnected");
  });
});

server.listen(3000);
