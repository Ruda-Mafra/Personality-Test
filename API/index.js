const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const PORT = process.env.PORT;

// connect DB
mongoose
  .connect(process.env.MONGOOSEDB_URL)
  .then(() => console.log("db connected"))
  .then((err) => {
    err;
  });

const databaseSeeder = require('./databaseSeeder')
// database seeder route
app.use('/api/seed', databaseSeeder )

app.get("/", (req, res) => {
  res.send("app is f running");
});

app.listen(PORT || 9000, () => {
  console.log(`server is running on ${PORT}`);
});

// rudamafra
// J0aquina

// mongodb+srv://rudamafra:J0aquina@cluster0.doy06.mongodb.net/
