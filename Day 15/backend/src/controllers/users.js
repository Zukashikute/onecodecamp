
const Users = require("../models/users")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Get users list
const getUsers = async (req, res) => {
   try {
      const result = await Users.find();
      if (result) {
         res.status(200).json(result);
      } else {
         res.status(404).json({ err: err.message })
         console.log("Can't find any users in database")
      }

   } catch (err) {
      res.status(500).json({ err: err.message })
      console.log("Error on getting users from getUsers() in our controller: " + err.message)
   }
}

// Create user
const signUpAcct = async (req, res) => {
   const { username, password, name, email, isAdmin } = req.body;

   try {
      const exists = await Users.findOne({ username });
      if (exists)
         return res.status(400).json({ error: "Username already in use." });

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await Users.create({
         username,
         password: hashedPassword,
         name,
         email,
         isAdmin,
      });

      res.status(201).json({ newUser });
   } catch (error) {
      res.status(404).json({ error: error.message });
   }
}

// Login user
const loginAcct = async (req, res) => {
   const { username, password } = req.body;

   try {
      const exists = await Users.findOne({ username });
      if (!exists)
         return res.status(404).json({ error: "Username not found." });

      const isPasswordMatched = await bcrypt.compare(
         password,
         exists.password
      );

      if (!isPasswordMatched)
         return res.status(400).json({ error: "Incorrect password" });

      const token = jwt.sign({ userId: exists._id }, process.env.JWT_SECRET);
      res.status(200).json({ username, token });
   } catch (error) {
      res.status(400).json({ error: error.message });
   }
};

module.exports = { getUsers, signUpAcct, loginAcct }