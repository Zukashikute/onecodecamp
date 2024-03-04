const dotenv = require("dotenv");
dotenv.config();
const { MongoClient } = require('mongodb');

const mongoURL = process.env.MONGO_URL
const dbName = process.env.DB_NAME

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(mongoURL);

let db;

const connectDb = callback => {
   if (db) {
      console.log('Db is already initialized!');
      return callback(null, db);
   }
   client.connect(mongoURL)
      .then(client => {
         db = client.db(dbName);
         callback(null, db)
      })
      .catch(err => {
         console.log(err);
         callback(err)
      });
}
const getDb = () => {
   if (!db) {
      throw Error("Db not initialized")
   }
   return db;
}

module.exports = { connectDb, getDb }