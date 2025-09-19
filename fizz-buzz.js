/**
 * Prints the numbers from 1 to 100 to the console.
 * For multiples of 3, prints "Fizz" instead of the number.
 * For multiples of 5, prints "Buzz" instead of the number.
 * For numbers which are multiples of both 3 and 5, prints "FizzBuzz".
 */
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
