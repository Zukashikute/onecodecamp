
const Users = require("../models/users")

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

module.exports = getUsers