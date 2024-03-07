const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
   title: { type: String, required: true },
   description: { type: String, },
   priority: { type: String, required: true },
   reporter: { type: String, required: true }
})

const Tickets = mongoose.model("Tickets", ticketSchema);

module.exports = Tickets;