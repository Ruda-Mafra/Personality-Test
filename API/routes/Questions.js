const express = require("express");
const questionRoute = express.Router();
const Question = require("../models/Question");
const AsyncHandler = require("express-async-handler");

questionRoute.get(
  "/",
  AsyncHandler(async (req, res) => {
    const questions = await Question.find({});
    res.json(questions);
  })
);

module.exports = questionRoute;
