const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config()
const MONGODB_URI = process.env.MONGO_LINK;

const app = express();
async function main() {
  mongoose.set('strictQuery', false);
  await mongoose.connect(MONGODB_URI);
  console.log("Database connected...");
}

main().catch((err) => console.log(err));
