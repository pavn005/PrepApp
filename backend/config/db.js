const mongoose = require("mongoose");

// Using async function declaration style for consistency
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {});
        console.log("Database Connected");
    }
    catch (err) {
        console.log("Error connecting to Database", err);
        process.exit(1);
    }
};

// Using ES modules export instead of CommonJS
module.exports = connectDB;