const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require('cors');


dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());

// connect DB
mongoose
  .connect(process.env.MONGOOSEDB_URL)
  .then(() => console.log("db connected"))
  .then((err) => {
    err;
  });

const databaseSeederQuestions = require("./databaseSeederQuestions");
const databaseSeederResults = require("./databaseSeederResults");

app.use(cors({
  origin: 'http://localhost:5173'  // Permitir o frontend acessar o backend
}));


// database seeder route
app.use("/api/seed", databaseSeederQuestions);
app.use("/api/seed", databaseSeederResults);

// Importando as rotas
const questionRoutes = require("./routes/Questions");
const resultRoutes = require("./routes/Result");

// Usando as rotas
app.use("/api/questions", questionRoutes);
app.use("/api/result", resultRoutes);

app.get("/", (req, res) => {
  res.send("app is f running");
});

app.listen(PORT || 9000, () => {
  console.log(`server is running on ${PORT}`);
});

// rudamafra
// J0aquina

// mongodb+srv://rudamafra:J0aquina@cluster0.doy06.mongodb.net/
