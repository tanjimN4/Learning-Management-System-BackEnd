const express = require("express");
const connectDB = require("./Config/dbConfig");
const app = express();
const cors=require("cors");
const coursesRoute = require("./Courses/coursesRoute");

app.use(express.json());

app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods:["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
)
// Connect to MongoDB
connectDB();

app.get("/", (req, res) => {
    res.send("hello Developer");
});

app.use('/api',coursesRoute)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
