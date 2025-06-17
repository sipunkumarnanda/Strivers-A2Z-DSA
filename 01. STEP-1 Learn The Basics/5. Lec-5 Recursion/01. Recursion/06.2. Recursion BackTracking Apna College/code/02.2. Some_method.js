
// Some method in js 


let numbers = [1, 3, 5, 8];

let hasEven = numbers.some((num) => num % 2 === 0);

console.log(hasEven);  // true (because 8 is even)


// --------------------------------------------------------


let words = ["hi", "world", "hello", "elephant"];

let longWordExists = words.some(word => word.length > 5);

console.log(longWordExists);  // true
