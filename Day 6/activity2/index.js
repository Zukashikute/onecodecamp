// Generate a random number between 1 and 10.
const randomNum = Math.floor(Math.random() * 10) + 1;

// Guess what the random generated number is
const userInput = prompt("Guess the random number?")

// Check if the user's input is a valid number
const parsedInput = parseInt(userInput)
if (isNaN(parsedInput) || parsedInput < 1 || parsedInput > 10) {
   console.log("Please enter a valid number.");
} else {
   // Check if the guess is correct
   if (parsedInput === randomNum) {
      console.log("Congratulations! Your guess is correct!");
   } else {
      console.log(`Sorry, the correct number was ${randomNum}. Try again!`);
   }
}