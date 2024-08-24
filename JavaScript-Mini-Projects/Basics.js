// 1. Variable Declarations
let variable1 = 10; // Variable that can be reassigned
const constant1 = 5; // Constant that cannot be reassigned

// 2. Function Creation

// Traditional function to add two numbers
function addNumbers(a, b) {
    return a + b;
}

// Arrow function to multiply two numbers
const multiplyNumbers = (a, b) => a * b;

// 3. Template Literals
// Create a multi-line string using template literals
const resultString = `
The sum of ${variable1} and ${constant1} is: ${addNumbers(variable1, constant1)}
The product of ${variable1} and ${constant1} is: ${multiplyNumbers(variable1, constant1)}
`;

// Log the multi-line string to the console
console.log(resultString);
