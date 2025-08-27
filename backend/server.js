require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Middleware to handle cors

app.use(cors({
    origin: "*",
    methods: ["GET","POST","PUT","DELETE"],
    allowedHeaders: ["content-type","Authorization"],
}));

connectDB();

//Middleware 
app.use(express.json());

//Routes
app.use("/api/auth",authRoutes);
app.use("/api/session",sessionRoutes);
app.use("/api/questions",questionRoutes);

app.use("/api/ai/generate-questions", protect,generateInterviewQuestions);
app.use("/api/ai/generate-explanation", protect,generateConceptExplanation);

//server uploads folder
app.use("/uploads",express.static(path.join(__dirname,"uploads"),{}));

const PORT = process.env.PORT || 5000;

app.listen(PORT,() =>{
    console.log(`server running on port ${PORT}`)
});

