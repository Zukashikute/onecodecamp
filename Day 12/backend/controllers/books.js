const { ObjectId } = require("mongodb");
const { getDb } = require("../db/db");

const getAllBooks = async (req, res) => {
   try {
      const result = await getDb().collection("books").find().sort({ author: 1 });
      result.toArray().then((book) => {
         res.setHeader('Content-Type', 'application/json');
         res.status(200).json(book);
      });
   } catch (err) {
      res.status(500).json({ err: "Couldn't fetch all books" });
      console.log("Error on getting all books", err)
   }

}

const getSingleBook = async (req, res) => {
   const userId = req.params.id;
   try {
      if (ObjectId.isValid(userId)) {
         const book = await getDb().collection("books").findOne({ _id: new ObjectId(userId) });
         if (book) {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(book);
         } else {
            res.status(404).json({ err: `Book not found with id: ${userId}` });
         }
      } else {
         res.status(500).json({ err: `Invalid id: ${userId}` });
         console.log("Error with an invalid id");
      }
   } catch (err) {
      res.status(501).json({ err: `Couldn't fetch a book with an id of: ${userId}` });
      console.log("Error on getting a book", err);
   }
}

const createNewBook = async (req, res) => {
   const newBook = req.body

   try {
      const book = await getDb().collection("books").insertOne(newBook);
      if (book) {
         res.setHeader('Content-Type', 'application/json');
         res.status(201).json(book);
      }
   } catch (err) {
      res.status(501).json({ err: `Couldn't insert a new book.` });
      console.log("Error on inserting a book", err);
   }
}

const deleteBook = async (req, res) => {
   const userId = req.params.id;

   try {
      if (ObjectId.isValid(userId)) {
         const book = await getDb().collection("books").deleteOne({ _id: new ObjectId(userId) });
         if (book) {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(book);
         } else {
            res.status(404).json({ err: `Book not found with id: ${userId}` });
         }
      } else {
         res.status(500).json({ err: `Invalid id: ${userId}` });
         console.log("Error with an invalid id");
      }
   } catch (err) {
      res.status(501).json({ err: `Couldn't delete a book with an id of: ${userId}` });
      console.log("Error on deleting a book", err);
   }
}

const updateBook = async (req, res) => {
   const userId = req.params.id
   const updateBook = req.body

   try {
      if (ObjectId.isValid(userId)) {
         const book = await getDb().collection("books").updateOne({ _id: new ObjectId(userId) }, { $set: updateBook });
         if (book) {
            res.setHeader('Content-Type', 'application/json');
            res.status(202).json(book);
         } else {
            res.status(405).json({ err: `Book not found with id: ${userId}` });
         }
      } else {
         res.status(500).json({ err: `Invalid id: ${userId}` });
         console.log("Error with an invalid id");
      }
   } catch (err) {
      res.status(501).json({ err: `Couldn't insert a new book.` });
      console.log("Error on inserting a book", err);
   }
}

module.exports = { getAllBooks, getSingleBook, createNewBook, updateBook, deleteBook };