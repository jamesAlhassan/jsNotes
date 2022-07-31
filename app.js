// IMPLICIT TYPE CONVERSION

// const numOne = "john";
// const numTwo = "kofi";

// Substracting Two Non-digit Strings
// const result = numOne - numTwo;
// console.log(result);
// NaN

// const numThree = "10";
// const numFour = "20";

// Substracting Two number Strings
// const resultTwo = numThree - numFour;

// console.log(resultTwo);
//  -10

//  Adding two number strings will be concatenation
// const resultThree = numFour + numThree;
// console.log(resultThree);
//  1020

// const numFive = 10;
// const resultFour = numThree + numFive;

// console.log(resultFive);
// 1010

// DATA TYPES
// Primitive - strings, number, boolean, null, undefined, symbol
// Object - Arrays, Functions, objects

// function addvalue(num1, num2) {
//   return num1 + num2;
// }
// const value = addvalue(2, 3);
// // FUNCTION EXPRESSION/ Anonymous functions
// const multiply = function (num1, num2) {
//   return num1 * num2;
// };
// const values = [10, 20, multiply(10, 20)];

// COMPARISON OPERATORS
// ==  checks only value whilst  === checks for value and type

// const a = 10;
// const b = 10;
// const c = "10";

// if (a == b) {
//   console.log("true");
// }
// if (a == c) {
//   console.log("true");
// }

// if (a === "c") {
//   console.log("false");
// }

// SWITCH STATMENT
// const dice = 5;

// switch (dice) {
//   case 1:
//     console.log("you got one");
//     break;
//   case 2:
//     console.log("you got two");
//     break;
//   case 3:
//     console.log("you got three");
//     break;
//   case 4:
//     console.log("you got four");
//     break;
//   case 5:
//     console.log("you got five");
//     break;
//   case 6:
//     console.log("you got six");
//     break;
//   default:
//     console.log("you did not roll the dice");
// }

// While and do while loops
// let amt = 10;

// while (amt > 1) {
//   console.log(`You have ${amt} in your account`);
//   amt--;
// }

//  code comes before condition, runs at least once
// let money = 12;

// do {
//   console.log(`You have ${amt} in your account`);
//   money++;
// } while (money < 10);

// const names = ["layla", "farid", "rahma", "maryam", "rahina", "nakiya"];
// const lastName = "hussein";
// let fullName = [];

// let i;

// for (i = 0; i < names.length; i++) {
//   let a = `${names[i]} ${lastName}`;
//   fullName.push(a);
// }

// console.log(fullName);

// const gas = [10, 20, 30];
// const food = [40, 20, 60];

// function calculate(arr1, arr2) {
//   let totalFood = 0;
//   let totalGas = 0;

//   for (let i = 0; i < arr1.length; i++) {
//     console.log({ food: (totalFood += arr1[i]) });
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     console.log({ gas: (totalGas += arr2[i]) });
//   }
//   const total = totalFood + totalGas;

//   return total;
// }

// const overallTotal = calculate(food, gas);
// console.log({ overallTotal: overallTotal });

// When assigning primitive data type value to a variable, any changes made are does not affect the original value
// let a = 1;
// let b = a;

// console.log(a, b);
// //   1 1

// b = 3;
// console.log(a, b);
//  1 3

// However for non-primitive datatypes chanes affect the original value

// let c = [2, 3];
// let d = c;

// console.log(c, d);
// // [2,3] [2,3]

// d[0] = 10;
// console.log(c, d);
// // [10, 3] [10, 3]

// // objects
// let person = { name: "kofi" };
// let person2 = person;

// console.log(person, person2);
// // { name: "kofi" }

// person2.name = "adwoa";
// console.log(person, person2);

//  Null and undefined both means no value
// undefined- js cannot find value
// null= developer sets value

// Ternary Operator
// 2 > 1 ? console.log("this is true") : console.log("this is false");

// CALLBACK FUNCTIONS AND HIGHER ORDER FUNCTIONS
// Callback functions functions passed as argument(s) to another function or return from another function(closure)
// Higher order functions accpets another function or returns another as a result

// function morning(name) {
//   return `Good morning ${name.toUpperCase()}`;
// }

// function greet(name, cb) {
//   console.log(`${cb(name)}! You are welcome ....`);
// }
// greet("kofi", morning);

// ARRAY ITERATORS
// forEach   - does not return a new array

// const people = [
//   { name: "naail", age: 2, positon: "developer", id: 1, salary: 200 },
//   { name: "rahmah", age: 30, position: "head", id: 2, salary: 300 },
//   { name: "rahina", age: 25, position: "marketer", id: 3, salary: 400 },
//   { name: "maryam", age: 28, position: "secretary", id: 4, salary: 600 },
//   { name: "layla", age: 38, position: "personal", id: 5, salary: 200 },
// ];

// people.forEach((person) => console.log(person.positon.toUpperCase()));

// MAP
// return a new array, does not change size of original array

// const newPeople = people.map((person) => {
//   return { firstName: person.name, oldAge: person.age };
// });

// const result = people.map((person) => {
//   return `<h1>${person.name}</h1>`;
// });
// console.log(newPeople);
// document.body.innerHTML = result.join("");

// FILTER
// return a new array, can change original array basd on a condition

// const youngPeople = people.filter((item) => item.age <= 10);
// console.log(youngPeople);

// FIND
// return a single instance - inthis case object
// return  first item if match is undefined
// great for getting unique values

// names = people.find((person) => person.id === 2);
// console.log(names);
// console.log(names.name);

// REDUCE
// reduces to a single value- number, array, object
// 1 parameter - acc - total of all calculation
// 2 parameter - curr - current iteration/value

// const total = people.reduce(function (acc, curr) {
//   console.log(`total: ${acc}`);
//   console.log(`current: ${curr.salary}`);
//   acc += curr.salary;
//   //   acc must be returned
//   return acc;
// }, 0);
// console.log(total);

// // MATH
// // DATE
// const date = new Date();
// console.log(date);

// DOM
// document.getElementById
// node-list/ arraylike- some array medthods do work
// document.getElementsByName
// document.getElementsByClassName
// document.querySelector /document.querySelectorAll - array methods work on them

// DOM NAVIGATION/ TRAVERSING
// parent.childNodes - including whitespace treated as text node
// parent.children
// parent.firstChild- whitespace included
// parent.lastChild- whitespace included

// parentElement
// child.parentElement

// sibling.previousSibling -whitespace included
// sibling.nextSibling -whitespace included

// sibling.nextElementSibling
// sibling.previousElementSibling

// nodeValue
// textContent

// getAttribute(attributeName)
// setAttribute('class', first)

// className
// const first = document.getElementById("first");

// const classValue = first.className;
// console.log(classValue);
// first.className = "colors text";

// classList

// createELement('element')
// createTextNode('text content')
// element.appendChild(childElement)

// const bodyDiv = document.createElement("div");
// text = document.createTextNode("new text");
// bodyDiv.appendChild(text);
// bodyDiv.classList.add("colors");
// document.body.appendChild(bodyDiv);
// or document.body.insertBefore(bodyDiv, elementtobe inserted before)
// document.body.replaceChild(newchild. oldchild)

// prepend
// innerText
// const heading = document.createElement("h6");
// heading.innerText("new text");
// document.body.prepend(heading)

// remove
// removechild

// innerHTML/ textContent

// EVENTS
// click
// const button = document.querySelector("button");
// const btn = document.querySelector(".btn");
// btn.addEventListener("click", function () {
// if (button.classList.contains("red")) {
//   button.classList.remove("red");
// } else button.classList.add("red");
// button.classList.toggle("red");
// });

// mouse
// mousedown- button is preesed
// mouseup- button is released
// mouseenter- moved onto an element
// mouseleave- moved out of an element

// key
// keypress- key is pressed
// keydown -key is down
// keyup - key is released

// submit

// event Object
// currentTarget
// preventDefault()

// currentTarget vs target
// currentTarget- always refers to the element on which the event handler is atteched
// target- identifies element on which the event occured

//  event propagation- the order in which event handlers are fired up
// event bubbling- default - from child(ren) to parent
// event capturing- from parent to child(ren)

// localStorage - data exist for the opening and closing of the browser
// sessionStorage - data exist while browser is opened

// key pair
// localStorage
// localStorage.setItem('name', 'james')
// same value overwrite previous
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear()

// sessionStorage
// sessionStorage.setItem('name', 'james')
// same value overwrite previous
// sessionStorage.getItem('name')
// sessionStorage.removeItem('name')
// sessionStorage.clear()

// JSON.stringify(), JSON.parse()

// const friends= ['kofi', 'ama', 'yaw']

// localStorage.setItem('friends', JSON.stringify(friends))
// const values = JSON.parse(localStorage.getItem('friends'))
// console.log(values[2]); // yaw

// DOM PROJECTS

// const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// const btn = document.getElementById("btn");
// const color = document.querySelector(".color");

// btn.addEventListener("click", function () {
//   let randomNumber = Math.floor(Math.random() * colors.length);
//   document.body.style.backgroundColor = colors[randomNumber];

//   color.textContent = colors[randomNumber];
// });

// const decrease = document.querySelector(".decrease");
// const increase = document.querySelector(".increase");
// const reset = document.querySelector(".reset");
// const number = document.querySelector(".number");
// const btns = document.querySelectorAll(".btn");
// let count = 0;

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     let styles = e.currentTarget.classList;
//     if (styles.contains("decrease")) {
//       number.textContent = count--;
//     } else if (styles.contains("increase")) {
//       number.textContent = count++;
//     } else if (styles.contains("reset")) {
//       number.textContent = 0;
//     }
//     let colors = number.style.color;
//     if (count < 0) {
//       number.style.color = "red";
//     }
//     if (count > 0) {
//       number.style.color = "green";
//     }
//     if (count == 0) {
//       number.style.color = "black";
//     }
//   });
// });

// ARROW FUNCTIONS
// has no name
// implicit return keyword if its oneliner
// {} can be omitted if its oneliner
// () can be omiited if theres only one parameter

// const sayHello = () => console.log("hello");
// sayHello();

// const greaterThan = (num1, num2) => {
//   if (num1 > num2) {
//     return "num1 greater than num2";
//   } else {
//     ("num is not greater than num2");
//   }
// };

// const checkOut = greaterThan(2, 4);

// // return an object
// const object = () => ({ name: "kofi", age: 10 });

// const person = object();

// In a regular function "this" refers to the parent, left of the dot
// however in an arrow function, "this" refers to its current surrounding scope

const ama = {
  fName: "ama",
  lName: "amponsah",
  sayName: function () {
    console.log(this);
    // this here will refer back to the parent ama when called
    console.log(`Hello, my name is ${this.fName} ${this.lName} `);
    setTimeout(function () {
      console.log(`Hello, my name is ${this.fName} ${this.lName} `);
    }, 5000);
    //  this here will refer back to the parent window since its not a function of ama, however, had am arrow function being used, it would have refered to ama, since that is the current surrounding scope
  },
};
const adwoa = {
  fName: "adowa",
  lName: "afrakomah",
  sayName: () => {
    console.log(this);
    // this here will refer back to its surronding scope window when called
    console.log(`Hello, my name is ${this.fName} ${this.lName} `);
  },
};

ama.sayName();
adwoa.sayName();
