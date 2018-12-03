//for loop:
const carsInReverse = ['Jeep', 'Audi', 'BMW', 'Ford', 'Volvo'];

for (var i = 0; i < carsInReverse.length; i++) {
    console.log(carsInReverse[i]);
}

// for ... in loop
const persons = {
    firstName: "Kevin",
    lastName: "Colten",
    birthDate: "Jan 5, 1925",
    gender: "female"
};
for (var x in persons) {
    console.log(x)
}

for (var x in persons) {
    console.log(x + ": " + persons[x])
} 


//while loop
var text = "";
var i = 0;
while (i < 1001) {
    text += console.log("<br>The number is " + i);
    i++;
}

//do ... while loop
var text = ""
var i = 0;


do {
    text += console.log("<br>The number is " + i);
    i++;
}
while (i < 1001);

/*When is a for loop better than a while loop?
  - It depends what you are looking to do, if you want make sure the function passes as long as a condition is met you'd 
    use a while loop. If you want to run  a function UNTIL it's a falsy value then you'd use a for loop.*/



