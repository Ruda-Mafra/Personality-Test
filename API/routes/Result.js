const express = require("express");
const router = express.Router();
const Result = require("../models/Result");
async function calculateResult(score) {
  try {
    console.log(`Calculating Result: ${score}`);
    const result = await Result.findOne({
      minScore: { $lte: score },
      maxScore: { $gte: score },
    });

    console.log("Result calculated:", result);

    if (result) {
      return result.result;
    } else {
      throw new Error("Could Not Calculate Result.");
    }
  } catch (error) {
    throw new Error("Error Calculating Result: " + error.message);
  }
}

router.get("/:score", async (req, res) => {
  const score = parseInt(req.params.score);

  if (isNaN(score)) {
    return res.status(400).json({ error: "Invalid Score." });
  }

  try {
    const resultDescription = await calculateResult(score);
    res.json({ result: resultDescription });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
