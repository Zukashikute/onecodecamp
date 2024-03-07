const Tickets = require("../models/tickets")

const createTickets = async (req, res) => {
   try {
      const { title, description, priority, reporter } = req.body

      const ticket = await Tickets.create({
         title,
         description,
         priority,
         reporter,
      });

      if (ticket) {
         res.status(200).json(ticket);
      } else {
         res.status(404).json({ err: err.message })
         console.log("Can't create a ticket in our database")
      }
   } catch (err) {
      res.status(500).json({ err: err.message })
      console.log("Error on creating a ticket on our createTickets() in our controller : " + err.message)
   }
}

const getTickets = async (req, res) => {
   try {
      const ticket = await Tickets.find();
      res.status(200).json(ticket);

   } catch (err) {
      res.status(500).json({ err: err.message })
      console.log("Error on getting users from getUsers() in our controller: " + err.message)
   }
}

const updateTickets = async (req, res) => {

}

const deleteTickets = async (req, res) => {

}

module.exports = { createTickets, getTickets, updateTickets, deleteTickets }