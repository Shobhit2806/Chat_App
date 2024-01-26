const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config()

connectDB()
const app =express();



const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`WEB SERVER STARTED on ${PORT}`))