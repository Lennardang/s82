const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const workoutRoutes = require("./routes/workout");
const userRoutes = require("./routes/user");
const cors = require('cors');
const app = express();

app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());

mongoose.connect("mongodb+srv://admin:admin1234@lennarddb.2tjq0q0.mongodb.net/Fitness-Tracker?retryWrites=true&w=majority&appName=LennardDB" 
  
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use("/workouts", workoutRoutes);
app.use("/users", userRoutes);

if (require.main === module) {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`API is now online on port ${PORT}`);
  });
}

// https://s82.onrender.com
module.exports = { app, mongoose };

