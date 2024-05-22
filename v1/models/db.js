const mongoose = require("mongoose");

const url =
  "mongodb+srv://damodhar123yelake:pass1234@university.iiolfew.mongodb.net/?retryWrites=true&w=majority&appName=university";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const conn = mongoose.connection;

conn.on("connected", () => {
  console.log("Connected to DB");
});
conn.on("disconnected", () => {
  console.log("Disconnected from DB");
});

conn.on("error", (err) => {
  console.log("Could not connect to DB", err);
});
