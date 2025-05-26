//STEP 1: Declaring Arrays (5 elements)
const animals = ["dog", "cat", "elephant", "lion", "panther"];
console.log(animals);

//STEP 2: Accessing Arrays
let firstElement = animals.at(0); //alternative with at() method
let middleElement = animals[Math.floor(animals.length / 2)];
let lastElement = animals[animals.length - 1];

console.log("First element is " + firstElement);
console.log("Middle element is " + middleElement);
console.log("Last element is " + lastElement);
console.log();

//STEP 3: Using Array Properties
console.log("The number of elements is " + animals.length);

//STEP 4: Array Methods (using push, shift and splice method)
animals.push("fox");
console.log(animals.at(-1) + " is recently added to animals");
console.log(animals);
console.log();

animals.shift();
console.log("First element is removed from animals");
console.log(animals);
console.log();

animals.splice(1, 2);
console.log(`Two elements are removed from index [1] of the above array`);
console.log(animals);
console.log();

//STEP 5: Iterating through Arrays (using for loop as traditional and forEach as modern)
console.log("Using for loop as a traditional method");

let season = ["spring", "summer", "autumn", "winter"];
console.log(season);
for (let i = 0; i < season.length; i++) {
  console.log(season[i]);
}
console.log();

console.log("Using forEach as a modern iteration method");
let numberSet = [1, 2, 3, 4, 5];
console.log(numberSet);
numberSet.forEach((numberSet) => {
  console.log(numberSet);
});
console.log();

//STEP 6: Array Destructuring
console.log(season);
const [first, second, ...rest] = season;
console.log("First destructured element of season is " + first);
console.log("Second destructured element of season is " + second);
console.log("The rest of season are " + rest);
