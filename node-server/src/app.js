const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 9000;
const app = express();

// Middleware to parse JSON body requests.
app.use(express.json());
app.use(cors({ origin: "*" }));

// Connect to the MongoDB database
mongoose
  .connect("mongodb://localhost:27017/ShopEasy", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

app.get("/", (req, res) => {
  return res.json("Hello");
});

app.use("/api", routes);
app.listen(PORT, () => {
  console.log(`Listening At Port ${PORT}`);
});
