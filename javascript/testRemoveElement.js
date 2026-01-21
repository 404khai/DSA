const fruits = ['apple', 'banana', 'cherry', 'date'];
const indexToRemove = fruits.indexOf('banana'); // Index of 'banana'
const numberOfElementsToRemove = 2;

fruits.splice(indexToRemove, numberOfElementsToRemove);
console.log(fruits); // Output: ['apple', 'cherry', 'date']
