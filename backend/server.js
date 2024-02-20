const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");


const path = require("path")

const { notFound, errorHandler } = require("./middleware/errorMiddleware");
dotenv.config();

connectDB();
const app = express();

app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

// ----------- DEPLOYMENT ------------------

const __dirname1 = path.resolve()

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

// ----------- DEPLOYMENT ------------------



app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, console.log(`WEB SERVER STARTED on ${PORT}`));




const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: ["http://localhost:3000","https://conversify-qtgb.onrender.com/"]
  },
});

io.on("connection", (socket) => {
  console.log("connected to socket.io");
  socket.on("setup",(userData)=>{
    socket.join(userData._id),
    socket.emit("connected")
  })
  socket.on("join chat",(room)=>{
    socket.join(room);
    console.log("User joined room"+room);
  })
  socket.on("new message",(newMessageRcvd)=>{
    var chat = newMessageRcvd.chat;
    if(!chat.users) return console.log("chat users not defined");
    chat.users.forEach((user) => {
      if(user._id===newMessageRcvd.sender._id) return;
      socket.in(user._id).emit("message received", newMessageRcvd);
    });
  })

  socket.on("typing",(room)=>socket.in(room).emit("typing"))
  socket.on("not typing",(room)=>socket.in(room).emit("not typing"))

  socket.off("setup",()=>{
    console.log("USER DISCONNECTED");
    socket.leave(userData._id)
  })
});
