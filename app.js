const express = require("express");
const mongoose = require("mongoose");
const alienRouter = require('./routers/aliens')
require("dotenv").config();
const MONGODB_URI = process.env.MONGO_LINK;

const app = express();
async function main() {
  mongoose.set("strictQuery", false);
  await mongoose.connect(MONGODB_URI);
  console.log("Database connected...");
}

main().catch((err) => console.log(err));

app.use('/aliens',alienRouter);

app.listen(3000, () => {
  console.log("Server started in port 3000");
});
