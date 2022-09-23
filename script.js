//Basic Exercise 1 and 2

console.log("Hello from console");
document.write("Hello from the Browser");

//Exercise 3
var userName = "Martin";
var userAge = 25;
console.log('Hi my name is ${userName} and ${userAge} years old');

// exercise 4
const players = ["Martin", "Thomas", "Peter", "Mathias", "Niki"];
console.table (players[2]);
//--END-----

//Intermidiate exercise
// Exercise 1: Write a JavaScript program that will sort the following values alphabetically: 

const cars= ["Tesla", "Audi", "Volvo", "Mazda", "Fiat", "Ferrari"];
cars.sort();

//-------END-------

//Exercise 2: create  The first array contains the following values apple, banana, kiwi:

const fruit= ["apple", "banana", "kiwi"];
console.log(fruit);

// Add Orange to the array
fruit.push("Orange");
console.log(fruit);

// New element can also be added to an array using the length property:
// const fruit = ["apple", "banana", "kiwi"];
//fruit[fruit.length] = "orange";  // Adds "orange" to fruit


//remove Orange from the array
fruit.pop();
console.log(fruit);

//exercise 2.2 The second array contains the following values monkey, horse, dog:

const animal= ["monkey", "horse", "dog"];
console.log(animal);

//Using different methods, the output should be as follows dog, horse, monkey:
// First sort the array
animal.sort();
console.log(animal);

// Then reverse it:
//animal.reverse();
//console.log(animal);


animal.unshift("cat");
console.log(animal);

// ------END------------

// exercise 3: Create a variable containing the following string mango, cherries,kiwi,grapes,pear,peach,orange,lemon

var vitaminA = 'mango cherries kiwi grapes pear peach orange lemon';
var arrayvitaminA = new Array();
var arrayvitaminA = vitaminA.split(' ');
document.write(arrayvitaminA.join("<br>"));

// ---END----


//Advance Exercise
// Exercise 1: Sum the following variables and store the result in one new variable:

let a = 7;

let b = 14;

let c = "21";

let d = '36';

let e = 42;

let sum = a + b + Number(c) + Number(d) +e;
console.log(sum);

// Multiply the following variables and store the result in one new variable:

let f = '1';

let g = 15;

let h = 8;

let i = "1";

let mult = Number(f) * g * h * Number(i);
console.log(mult);

//Divide the two results that you got from the arithmetic operations and print the result in the web browser.
document.write(sum)/(mult);

//-----END--------

// Exercise 2
let people = ['Greg', 'Mary', 'Devon', 'James'];

//1.Remove "Greg" from the array.
people.shift();
console.log(people);

//2.Add "Matt" to the front of the array.
people.unshift('Matt');
console.log(people);

// 3.Remove “James” from the array.
people.pop();
console.log(people);

//4.Add your name to the end of the array.
people.push('Celina');
console.log(people);

//5. Make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
console.log(people.slice(2));

//6. Using the indexOf method, find the index of where "Mary" is located.

console.log(people.indexOf('Mary'));

// 7.Using the indexOf method, find the index of where "Foo" is located (this should return -1).
console.log(people.indexOf('Foo'));

//8. Redefine the people variable with the values you started with.
people.splice(0, 5, 'Greg', 'Mary', 'Devon', 'James');
console.log(people);

// 9.Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Anna". Your array should look like this when you are done
// ["Greg", "Mary", "Elizabeth", "Anna", "James"]
people.splice(2, 1, "Elizabeth", "Anna");
console.log(people);

// 10.Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
let withBob = people.slice(0, 5);
withBob.push("Bob");
console.log(withBob);
console.log(people)

//  Another way solution
// let withBobs= people.concat("Bob");
// console.log(withBobs);




