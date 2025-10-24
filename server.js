const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

connectDB();

app.get("/", (req, res) => {
  res.json({ message: "welcome to the auth api" });
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("server started on port" + PORT);
});
