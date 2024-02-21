/*
   Activity 1
   Shopping cart 1
   Create a new class called Item with the following
   properties/attributes:
   name
   price
   stock
   sold

   Create 3 instances of item.

   Now add a constructor method to the class and require the user to specify the name,
   price, and stock of each instance. In the constructor also specify in the code so that
   the initial sold is set to be 0 whenever a new instance is created.
   Add the following functions for this class:
   logDetails() - have this method display the item's name, price, number of stock, and
   the total sold. buy() - have it display "Buying" on the screen and increase the total sold
   by 1. return() - have it display "Returning" on the screen and decrease the total sold
   by 1.
   Have the first instance buy three times, return once, and have it logDetails(). Have the
   second instance buy twice, return twice, and have it logDetails(). Have the third
   instance return three times and logDetails().
   What would you do to prevent the instance from having negative sold, and buying
   out-of-stock?

*/
class Item {
   constructor(name, price, stock) {
      this.name = name;
      this.price = price;
      this.stock = stock;
      this.sold = 0;
   }

   logDetails() {
      console.log(`Item name: ${this.name}\nPrice: ${this.price}\nStock Left: ${this.stock}\nTotal Sold: ${this.sold}`)
   }

   buy() {
      console.log(`Buying ${this.name} for ${this.price}.`)
      if (this.stock < 1) {
         console.log(`Insufficient stock, we only have ${this.stock} left in the store.`)
         return
      } else {
         console.log(`You just bought ${this.name}! Congratulations!`);
         this.stock--
         this.sold++
      }
   }

   return() {
      console.log(`Returning an item: ${this.name}`)
      if (this.sold == 0) {
         console.log(`Can't return an item: ${this.name}. We only had ${this.stock} in the store. Where did you buy this one?`)
      } else {
         console.log(`Returned successful!`)
         this.stock++
         this.sold--
      }
   }
}

const item1 = new Item("PS5", 30000, 3);
item1.logDetails();
item1.buy();
item1.buy();
item1.buy();
item1.buy();
item1.logDetails();
item1.return();
item1.logDetails();
item1.return();
item1.logDetails();
item1.return();
item1.logDetails();




/*
   Activity 2
   House

   Create a class called House. In the constructor, allow the user to
   specify the following attributes: location, price, lot, and type. If the
   type is Pre-selling, set the discount to 20%. Otherwise, set the
   discount to be 5%.

   Create five different instances of the class House. In the class have a method called
   show_all() that returns all the information about the house as a string. In your constructor,
   call this show_all() method to display information about the house when a new house is
   created.
*/

class House {
   constructor(location, price, lot, type) {
      this.location = location;
      this.price = price;
      this.lot = lot;
      this.type = type;
      this.discount = this.discount();
      this.totalPrice = this.price - (this.price * this.discount);
   }

   discount() {
      if (this.type === "Pre-selling") {
         return 0.2;
      } else {
         return 0.05
      }
   }

   show_all() {
      console.log(`Location: ${this.location}\nPrice: ${this.price}\nLot: ${this.lot}sqm\nType: ${this.type}\nDiscount: ${this.discount}\nTotalPrice: ${this.totalPrice}`)
   }
}

const house1 = new House("La Union", 1500000, 100, "Pre-selling")
house1.show_all();
const house2 = new House("Metro Manila", 1000000, 150, "Ready for Occupancy")
house2.show_all();

/*
   Activity 3
   Email builder

   Create an “EmailBuilder” class that allows you to build an email message with various
   components. The class should have methods to set the recipient, subject, body, and
   attachments. Have these methods chained to achieve a real flow on sending an email.

   Add a “send” method that logs the constructed email details (in a real-world scenario, you would
   implement actual email sending logic).
   Below should be how it should look like:
*/

class EmailBuilder {
   constructor() {
      this.email = {
         recipient: "",
         subject: "",
         body: "",
         attachments: []
      }
   }

   recipient(recipient) {
      this.email.recipient = recipient;
      return this;
   }

   subject(subject) {
      this.email.subject = subject;
      return this;
   }

   body(body) {
      this.email.body = body;
      return this;
   }

   attachments(attachment) {
      this.email.attachments.push(attachment);
      return this;
   }

   send() {
      console.log("Sending email:")
      console.log(`Recipient: ${this.email.recipient}`)
      console.log(`Subject: ${this.email.subject}`)
      console.log(`Body: ${this.email.body}`)
      console.log(`Attachments: Array(${this.email.attachments.length})`)
   }
}

const myEmail = new EmailBuilder();

myEmail.recipient("john@example.com").subject("Meeting Tomorrow").body("Hi John, see you there!").attachments("meeting.docx").send();