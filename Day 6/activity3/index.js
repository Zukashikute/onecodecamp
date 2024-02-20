/* Create a function called EmitRandomNumber(). In this function, after 2 full seconds (2000 ms),
   have it generate a random number between 0 to 100. If the random number generated is below
   80, have it call that function again, up to 10 times, until the random number generated is greater
   than 80.
   After the program is run, have it generate a log such as follows:
   Attempt #1. EmitRandomNumber is called.
   2 seconds have lapsed.
   Random number generated is 35.
   - - - - -
   Attempt #2. EmitRandomNumber is called.
   2 seconds have lapsed.
   Random number generated is 76.
   - - - - -
   Attempt #3. EmitRandomNumber is called.
   2 seconds have lapsed.
   Random number generated is 53.
   - - - - -
   Attempt #4. EmitRandomNumber is called.
   2 seconds have lapsed.
   Random number generated is 85!!!
   - - - - -
   Note that the maximum number of attempts could be set as 10, so that the program doesn't take
   more than 20 seconds or so to complete, at maximum.
   You'll do this in three different approaches:
   1. Use traditional callbacks to accomplish the desired tasks.
   2. Use promises this time.
   3. Use purely async/await
*/



// Traditional Callback
// const EmitRandomNumber = (attempt = 1) => {
//    setTimeout(() => {
//       const randomNum = Math.floor(Math.random() * 100) + 1;
//       const isHighRandomNum = randomNum >= 80;
//       ShowInfo(randomNum, attempt, isHighRandomNum);

//       if (!isHighRandomNum && attempt < 10) {
//          EmitRandomNumber(attempt + 1);
//       }
//    }, 2000);
// }

// const ShowInfo = (randomNum, attempt, isHighRandomNum) => {
//    console.log(`Attempt #${attempt}. EmitRandomNumber is called.`);
//    console.log("2 seconds have lapsed.");
//    isHighRandomNum ?
//       console.log(`Random number generated is ${randomNum}!!!`)
//       :
//       console.log(`Random number generated is ${randomNum}.`);
//    console.log("- - - - -");
// }

// EmitRandomNumber()

// Using Promises
// const EmitRandomNumber1 = (attempt = 1) => {
//    return new Promise((resolve, reject) => {
//       setTimeout(() => {
//          const randomNum = Math.floor(Math.random() * 100) + 1;
//          const isHighRandomNum = randomNum >= 80;
//          resolve(ShowInfo1(randomNum, attempt, isHighRandomNum));

//          if (!isHighRandomNum && attempt < 10) {
//             resolve(EmitRandomNumber1(attempt + 1));
//          }
//       }, 2000);
//    })
// }

// const ShowInfo1 = (randomNum, attempt, isHighRandomNum) => {
//    console.log(`Attempt #${attempt}. EmitRandomNumber is called.`);
//    console.log("2 seconds have lapsed.");
//    isHighRandomNum ?
//       console.log(`Random number generated is ${randomNum}!!!`)
//       :
//       console.log(`Random number generated is ${randomNum}.`);
//    console.log("- - - - -");
// }

// EmitRandomNumber1()

// Using Async and Await
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const EmitRandomNumber2 = async (attempt = 1) => {
   try {
      await delay(2000);
      const randomNum = Math.floor(Math.random() * 100) + 1;
      const isHighRandomNum = randomNum >= 80;

      ShowInfo2(randomNum, attempt, isHighRandomNum);

      if (!isHighRandomNum && attempt < 10) {
         await EmitRandomNumber2(attempt + 1);
      }
   } catch (error) {
      console.error(error);
   }
}

const ShowInfo2 = (randomNum, attempt, isHighRandomNum) => {
   console.log(`Attempt #${attempt}. EmitRandomNumber is called.`);
   console.log("2 seconds have lapsed.");
   isHighRandomNum ?
      console.log(`Random number generated is ${randomNum}!!!`)
      :
      console.log(`Random number generated is ${randomNum}.`);
   console.log("- - - - -");
}

EmitRandomNumber2()



