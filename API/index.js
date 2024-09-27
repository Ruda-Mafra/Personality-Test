const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());

mongoose
  .connect(process.env.MONGOOSEDB_URL)
  .then(() => {
    console.log("db connected");
    seedDatabase();
  })
  .catch((err) => {
    console.error(err);
  });

const seedDatabase = async () => {
  try {
    const Question = require("./models/Question");
    const questions = require("./data/Questions");
    await Question.deleteMany({});
    await Question.insertMany(questions);
    console.log("Questions seeded successfully!");

    const Result = require("./models/Result");
    const results = require("./data/Results");
    await Result.deleteMany({});
    await Result.insertMany(results);
    console.log("Results seeded successfully!");
  } catch (error) {
    console.error("Error seeding the database:", error);
  }
};

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

const questionRoutes = require("./routes/Questions");
const resultRoutes = require("./routes/Result");

app.use("/api/questions", questionRoutes);
app.use("/api/result", resultRoutes);

app.get("/", (req, res) => {
  res.send("app is f running");
});

app.listen(PORT || 9000, () => {
  console.log(`server is running on ${PORT}`);
});
