const userInput = prompt("Enter a time between 1 to 60?")

const parsedInput = parseInt(userInput)

const formatUserInput = (minutes) => {
   if (isNaN(minutes) || minutes < 0 || minutes > 60) {
      return "Invalid input";
   }

   const totalSeconds = Math.floor(minutes * 60);
   const formattedMinutes = Math.floor(totalSeconds / 60);
   const formattedSeconds = totalSeconds % 60;

   // You can use padStart to ensure that single-digit seconds are formatted with leading zero
   const formattedTime = `${String(formattedMinutes).padStart(2, '0')}:${String(formattedSeconds).padStart(2, '0')}`
   return formattedTime;
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const startTimer = async (minutes) => {
   let totalSeconds = Math.floor(minutes * 60);
   let formattedMinutes = Math.floor(totalSeconds / 60);
   let formattedSeconds = totalSeconds % 60;

   try {
      const intervalFunction = async () => {
         while (formattedMinutes > 0 || formattedSeconds > 0) {
            await delay(1000);

            if (formattedSeconds === 0) {
               minutes--;
               formattedSeconds = 59;
            } else {
               formattedSeconds--;
            }
            updateTimer(minutes, formattedSeconds);
         }
         alert("Time is up!");
      };
      await intervalFunction();

   } catch (e) {
      console.error(error);
   }
};

const resetTimer = () => {
   clearInterval(timerInterval);
   let minutes = parsedInput;
   updateTimer(minutes);
}

const updateTimer = (minutes) => {
   const totalSeconds = Math.floor(minutes * 60);
   const formattedMinutes = Math.floor(totalSeconds / 60);
   const formattedSeconds = totalSeconds % 60;

   const formattedTime = `${String(formattedMinutes).padStart(2, '0')}:${String(formattedSeconds).padStart(2, '0')}`

   timeText.textContent = formattedTime

   return formattedTime;
}

const timeBox = document.getElementById("timeSection");

// Create a div element with id "buttonContainer" and append it to the document
const buttonContainer = document.createElement("div");
buttonContainer.setAttribute("id", "buttonContainer");
timeBox.appendChild(buttonContainer);

// Create a button element, set its text content to "Start", and append it to the buttonContainer
const startButton = document.createElement("button");
startButton.setAttribute("id", "startButton");
startButton.textContent = "Start";
buttonContainer.appendChild(startButton);
startButton.addEventListener("click", () => startTimer(parsedInput));

// Create a button element, set its text content to "Reset", and append it to the buttonContainer
const resetButton = document.createElement("button");
resetButton.setAttribute("id", "resetButton");
resetButton.textContent = "Reset";
buttonContainer.appendChild(resetButton);
resetButton.addEventListener("click", resetTimer);

// Create a div element with id "timeContainer" and append it to the document
const timeContainer = document.createElement("div");
timeContainer.setAttribute("id", "timeContainer");
timeBox.appendChild(timeContainer);

// Create an h1 element, set its text content to the time input, and append it to the timeContainer
const timeText = document.createElement("h1");
timeText.setAttribute("id", "timerText");
timeText.textContent = formatUserInput(parsedInput);
timeContainer.appendChild(timeText);




