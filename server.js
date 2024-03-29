const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const homeRoutes = require("./routes/homeRoutes");

// Express setup
const app = express();
const PORT = 5000;

// MONGODB Setup
dotenv.config({ path: "./config/.env" });
const mongoString = process.env.DATABASE_URL;
console.log(mongoString);
mongoose.connect(mongoString);

const database = mongoose.connection;
database.on("error", (error) => {
  console.log(error);
});
database.once("connected", () => {
  console.log("Database Connected");
});

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
