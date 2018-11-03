//Write a JavaScript program to display the current day and time.
const date = new Date();
 
console.log(date);

//Write a JavaScript program to convert a number to a string.
const num = 24;
const n = num.toString();
console.log(n)

//Write a JavaScript program to convert a string to the number.
const a = parseInt("7");
console.log(a);

/*Write a JavaScript program that takes in different datatypes and prints out whether they are a:
Boolean
Null
Undefined
Number
NaN
String*/
console.log(typeof 42);
console.log(typeof true);
console.log(typeof variable);
console.log(typeof 'string');

//Write a JavaScript program that adds 2 numbers together.
const e = 26;
const g = 84;
const z = e + g;
console.log(z);

//Write a JavaScript program that runs only when 2 things are true.
const twoTrue = (arg1, arg2) => {
  if (arg1 && arg2) {
    return true
  }
}
twoTrue(false, 6)
//Write a JavaScript program that runs when 1 of 2 things are true.
const oneTrue = (arg1, arg2) => {
  if (arg1 || arg2) {
    return true
  }
}
oneTrue(false, 6)

//Write a JavaScript program that runs when both things are not true.
const notTrue = (arg1, arg2) => {
  if (!arg1 && !arg2) {
    return true
  }
}
notTrue(false, false)
