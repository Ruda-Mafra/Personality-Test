const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT;



app.get("/", (req,res)=> {
  res.send("app is f running")
})



app.listen(PORT || 9000, () => {
  console.log(`server is running on ${PORT}`);
});
