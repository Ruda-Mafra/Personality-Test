const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const { MongoMemoryServer } = require("mongodb-memory-server");


dotenv.config();

const PORT = process.env.PORT;
const USE_IN_MEMORY_DB = process.env.USE_IN_MEMORY_DB === 'true';


app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);


const connectDB = async () => {
  let mongoUri;
  if (USE_IN_MEMORY_DB) {
    const mongoServer = await MongoMemoryServer.create();
    mongoUri = mongoServer.getUri();
  } else {
    mongoUri = process.env.MONGOOSEDB_URL;
  }

  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected");
    seedDatabase();
  } catch (error) {
    console.error("DB connection error:", error);
    process.exit(1);
  }
};

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


connectDB();
