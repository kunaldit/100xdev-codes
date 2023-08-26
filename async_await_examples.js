// callbacks
function delayedGreeting(name, bigboy) {
  setTimeout(function() {
    bigboy("Hello, " + name + "!");
  }, 2000);
}

function sayGoodbye(message) {
  console.log(message);
  console.log("Goodbye!");
}
sayGoodbye("hi all ");
delayedGreeting("Alice", sayGoodbye);
  
// //callbacks with parameters 
// function calculate(a, b, callback) {
//     const result = a + b;
//     callback(result);
//   }
  
//   function logResult(result) {
//     console.log("The result is:", result);
//   }
  
//   calculate(5, 3, logResult);