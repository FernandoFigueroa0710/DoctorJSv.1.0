const express = require("express");
const bodyParser = require("body-parser");



const app = express();



app.listen(3001, () => {
  console.log("I am running on port 3001");
});
