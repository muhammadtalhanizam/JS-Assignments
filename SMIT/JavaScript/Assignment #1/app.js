/* Q-1  */

// let num1 = prompt("Enter First Number: ");
// let num2 = prompt("Enter Second Number: ");

// if (num1 > num2) {
//   console.log(num1 + " Is Larger");
// } else if (num2 > num1) {
//   console.log(num2 + " Is Larger");
// } else {
//   console.log("BOTH ARE EQUAL");
// }



/* Q- 2  */

// let number = prompt("Enter a number: ");

// if (number > 0) {
//   alert("The Sign is + ");
// } else if (number < 0) {
//   alert("The Sign is - ");
// } else {
//   alert("The Value Is Null");
// }




/* Q-3  */

// let num1 = prompt("Enter the first number:");
// let num2 = prompt("Enter the second number:");
// let num3 = prompt("Enter the third number:");
// let num4 = prompt("Enter the fourth number:");
// let num5 = prompt("Enter the fifth number:");


// num1 = parseFloat(num1);
// num2 = parseFloat(num2);
// num3 = parseFloat(num3);
// num4 = parseFloat(num4);
// num5 = parseFloat(num5);

// const largestNumber = Math.max(num1, num2, num3, num4, num5);


// console.log("The largest number is: " + largestNumber);




/* Q-4  */

// for (let i = 0; i <= 15; i++) {
//   if (i % 2 === 0) {
//     console.log(i + ' is even');
//   } else {
//     console.log(i + ' is odd');
//   }
// }




/* Q-5  */

// const marks = [80, 90, 70, 65, 55, 95];

// const sum = marks.reduce((acc, val) => acc + val, 0);
// const average = sum / marks.length;

// let grade;
// if (average < 60) {
//   grade = 'F';
// } else if (average < 70) {
//   grade = 'D';
// } else if (average < 80) {
//   grade = 'C';
// } else if (average < 90) {
//   grade = 'B';
// } else {
//   grade = 'A';
// }

// console.log(`Average marks: ${average}`);
// console.log(`Grade: ${grade}`);






/* Q-6  */

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }



/* Q-7  */

// let rows = 5;

// for (let i = 1; i <= rows; i++) {

  
//   for (let j = 1; j <= i; j++) {
//     document.write("* ");
//   }

//   document.write("<br>");
// }