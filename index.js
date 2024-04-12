"use strict";
//Assignment Q1 - Hello Variable
let greetings = "Hello, World!"; //Declare a variable named greeting with the string value "Hello, World!"
console.log(greetings + "/n"); //Printed greetings using console.log function
//Assignment Q2 - Basic Math
let integer1 = 9; //Defined variable with integer value
let integer2 = 5; //Defined another variable with integer value
console.log("Sum = " + (integer1 + integer2)); //sum of the declared integers
console.log("Difference = " + (integer1 - integer2)); //difference of the declared integers
console.log("Product" + integer1 * integer2); //product of the declared integers
console.log("Quotient = " + integer1 / integer2); //quotient of the declated integers
//Assignment Q3 - Swapping Values
let swapvariableX = 2; //Variable value before swap
let swapvariableY = 3; //Variable value before swap
swapvariableX = swapvariableX + swapvariableY; //swapping through maths calculations
swapvariableY = swapvariableX - swapvariableY;
swapvariableX = swapvariableX - swapvariableY;
console.log(swapvariableX); //After swap value
console.log(swapvariableY); //After swap value
//Assignment Q4 - Type Annotation (TypeScript)
let StringVariable; //A string variable initiated with a value
//StringVariable = 10; Error: Type number is assignable to type string
//Assignment Q5 - Modulus Operator
console.log(integer1 % integer2);
//Assignment Q6 - Increment Challenge
integer1 - integer1++;
console.log(integer1);
integer1 += 1;
console.log(integer1);
//Assignment Q7 - Logical Gates
let boolone = true;
let booltwo = false;
let boolthree = true;
console.log(boolone && booltwo && boolthree);
console.log(boolone || booltwo || boolthree);
console.log(!boolone);
//Assignment Q8 - Compound Assignment
integer1 += 1;
console.log(integer1);
integer1 -= 1;
console.log(integer1);
integer1 *= 2;
console.log(integer1);
integer1 /= 2;
console.log(integer1);
//Assignment Q9 - Even or Odd
if (integer1 % 2 === 0) {
    console.log("Even");
}
else
    console.log("Odd");
//Assignment Q10 - Voting Eligibility
if (integer1 >= 18) {
    console.log("Eligible for voting");
}
else
    console.log("Not Eligible for voting");
//Assignment Q11 - Grading System
let examscore = 98;
if (examscore >= 95 && examscore <= 100) {
    console.log("A+ Grade");
}
if (examscore >= 90 && examscore < 95) {
    console.log("A Grade");
}
if (examscore >= 85 && examscore < 90) {
    console.log("B Grade");
}
if (examscore >= 80 && examscore < 85) {
    console.log("C Grade");
}
if (examscore < 80) {
    console.log("Fail");
}
//Assignment Q12 - Max of Three
let num1 = 10;
let num2 = 11;
let num3 = 12;
console.log(Math.max(num1, num2, num3));
//Assignment Q13 - Leap Year Checker
let year = 2024; // Assign the year you want to check here
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a leap year.");
}
else {
    console.log(year + " is not a leap year.");
}
//Assignment Q14 - Fahrenheit to Celsius Converter
let Fahrenheit = 98.6;
let celsius = ((Fahrenheit - 32) * 5) / 9;
console.log(celsius);
//Assignment Q15 - Positive, Negative, or Zero
let PNZnumber = -1;
if (PNZnumber > 0) {
    console.log("Number is positive");
}
if (PNZnumber < 0) {
    console.log("Number is negative");
}
if (PNZnumber === 0) {
    console.log("Number is ZERO");
}
//Assignment Q16 - Multiplication Table
let MTnumber = 2; // Assign the number for which you want to print the multiplication table here
for (let i = 1; i <= 10; i++) {
    let result = MTnumber * i;
    console.log(result);
}
