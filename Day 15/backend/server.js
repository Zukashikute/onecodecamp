const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

const PORT = process.env.PORT || 4000

app.use(express.json())
   .use(cors())
   .use("/", require("./src/routes"));

mongoose.connect(process.env.MONGO_URL)
   .then(() => {
      app.listen(PORT, () => {
         console.log('Connected to DB and listening on ' + PORT);
      });
   })
   .catch((error) => {
      console.log("Error connecting to MongoDB: " + error.message)
   })