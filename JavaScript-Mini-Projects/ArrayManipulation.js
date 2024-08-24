// Initialize the Array
let numbers = [5, 3, 8, 1, 2];

// Add a Number function
function addNumber(array, number) {
    array.push(number);
}

// Remove a Number function
function removeNumber(array, number) {
    const index = array.indexOf(number);
    if (index !== -1) {
        array.splice(index, 1);
    }
}

// Sort the Numbers function
function sortNumbers(array) {
    return array.slice().sort((a, b) => a - b);
}

// Calculate Sum function
function calculateSum(array) {
    return array.reduce((sum, current) => sum + current, 0);
}

// Calculate Average function
function calculateAverage(array) {
    return calculateSum(array) / array.length;
}

// Main Program

console.log("Initial array:", numbers);

console.log("\nAfter adding 4:");
addNumber(numbers, 4);
console.log(numbers);

console.log("\nAfter removing 3:");
removeNumber(numbers, 3);
console.log(numbers);

console.log("\nSorted array:");
let sortedArray = sortNumbers(numbers);
console.log(sortedArray);

console.log("\nSum of numbers:", calculateSum(numbers));

console.log("\nAverage of numbers:", calculateAverage(numbers));