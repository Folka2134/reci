const express = require("express");
const mongoose = require("mongoose");

const homeRoutes = require("./routes/homeRoutes");

// Express setup
const app = express();
const PORT = 5001;

// Middleware
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use("/", homeRoutes);

app.listen(PORT, () => {
  console.log(`server running on PORT:${PORT}`);
});
