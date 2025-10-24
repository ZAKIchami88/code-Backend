const moongose = require("mongoose");
require("dotenv").config();

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}/${process.env.MONGODB_DBNAME}?appName=Cluster0`;

async function connectDB() {
  try {
    await moongose.connect(uri);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Connection to Mongdb failed", error);
  }
}

module.exports = connectDB;
