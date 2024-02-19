// Exercise 7

// Create a function counter that returns a function. The returned function should increment
// a counter variable every time it's called. Use this to create two counters and observe if
// they share the same state.

const counter = () => {
   let count = 0;

   return () => {
      count++
      console.log(count)
   }
}

var counter1 = counter();
var counter2 = counter();

counter1();
counter1();

counter2();
counter2();