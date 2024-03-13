var user_input=prompt("write your name")
var a =19;
var user_input=prompt("write your age")
var user_input2=prompt("write traffic signal color")
var user_input3=prompt("write your city in which do you live")
var user_input3=prompt("write your country")

// Prompt user to enter the first number
var firstNumber = parseFloat(prompt("Enter the first number:"));

// Prompt user to enter the second number
var secondNumber = parseFloat(prompt("Enter the second number:"));

// Prompt user to enter the operation
var operation = prompt("Enter the operation (+, -, *, /, %):");

// Check if the inputs are valid numbers
if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
  // Perform the operation based on user input
  if (operation === '+') {
    console.log("Result: " + (firstNumber + secondNumber));
  } else if (operation === '-') {
    console.log("Result: " + (firstNumber - secondNumber));
  } else if (operation === '*') {
    console.log("Result: " + (firstNumber * secondNumber));
  } else if (operation === '/') {
    if (secondNumber !== 0) {
      console.log("Result: " + (firstNumber / secondNumber));
    } else {
      console.log("Error: Division by zero is not allowed.");
    }
  } else if (operation === '%') {
    console.log("Result: " + (firstNumber % secondNumber));
  } else {
    console.log("Invalid operation. Please enter a valid operation.");
  }
} else {
  console.log("Invalid input. Please enter valid numbers.");
}



