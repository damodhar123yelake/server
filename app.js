const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config({
  path: "./config/.env",
});
const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 9090;

// Import and use routes

app.use("/api/v1", require("./v1"));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
