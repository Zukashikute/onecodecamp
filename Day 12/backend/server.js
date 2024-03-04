const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const mongodb = require('./db/db');

const app = express();

const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
   .use(cors())
   .use("/", require("./routes"));


mongodb.connectDb((err, mongodb) => {
   if (err) {
      console.log(err);
   } else {
      app.listen(PORT, () => {
         console.log('Connected to DB and listening on ' + PORT);
      });
   }
});