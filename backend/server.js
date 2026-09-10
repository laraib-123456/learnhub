// TaU5OjEByOz9KMuZ
// shahlaraib978_db_user

// mongodb+srv://<db_username>:TaU5OjEByOz9KMuZ@cluster0.zatr246.mongodb.net/

require ("dotenv") .config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const studentRoutes = require("./routes/studentRoutes");
const coourseRoutes = require("./routes/courseRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/students", studentRoutes);
app.use("/api/courses", coourseRoutes);
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
    res.send("LearnHub API is running");
});

 const PORT = process.env.PORT || 5000;

 mongoose
 .connect(process.env.MONGO_URI)
 .then (() => {
    console.log("MongoDB Atlas connected");
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
 })
 .catch((err) => console.error("MongoDB connection error:", err.message));