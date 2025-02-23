// const profile = {
//   userName: "shraddakhapra",
//   isFollow: true,
//   followers: 23,
//   following: 34,
// };
// console.log(typeof profile.isFollow);

//operators and conditional statements
/*write  a code which can give  grades to students according to their scores .
1 80-100  A
2 70-79  B
3 60-69  C
4 50-59  D
5 0-49  F


Answer : */

// let score = 53;
// if (score >= 80 && score <= 100) {
//   console.log("A");
// } else if (score >= 70 && score <= 79) {
//   console.log("B");
// } else if (score >= 60 && score <= 69) {
//   console.log("C");
// } else if (score >= 50 && score <= 59) {
//   console.log("D");
// } else {
//   console.log("F");
// }

// for-of Loop
// let str = "javascript";
// let size = 0;
// for (let val of str) {
//   console.log(val);
//   size++;
// }

// console.log(size);
//for-in Loop
// let student = {
//   name: "shraddha",
//   Age: 22,
//   cgpa: 5.3,
//   isPass: true,
// };
// for (let key in student) {
//   console.log("key=", key, "value=", student[key]);
// }

/* let's practice 
1. Print all even numbers from 0 to 100?
*/

// for (let i = 0; i <= 100; i++) {
//   console.log(i);
// }

// for (let i = 0; i <= 100; i++)
//   if (i % 2 === 0) {
//     console.log(i);
//   }

// let gameNum = 26;
// let usrNum = prompt("guess the number ");
// while (usrNum != gameNum) {
//   usrNum = prompt("you entered wrong number, try again");
// }
// console.log("congratulation you entered correct number");

//arrays
// const sinobi = ["kakashi ", "itachi", "shikamaru", "jiraya"];
// console.log(sinobi[0]);
//looping over an array

// print all elements of an array
// const sinobi = [
//   "kakashi ",
//   "itachi",
//   "shikamaru",
//   "jiraya",
//   "sasuke",
//   "naruto",
//   "hinita",
// ];
// for (let i = 0; i < sinobi.length; i++) {
//   console.log(sinobi[i]);
// }

// const naruto = ["kakashi", "itachi", "shikamaru", "jiraya", "tobirama"];
// for (let sinobi of naruto) {
//   console.log(sinobi);
// }

// const places = ["tokyo", "newyork", "paris", "rome", "london"];
// for (let place of places) {
//   console.log(place);
// }

/* practice    question 
for a given array with marks of students [85,75,74,85,66,54,54] find the average marks of the entire class */

// const marks = [85, 75, 74, 85, 66, 54];
// let sum = 0;
// for (let val of marks) {
//   sum += val;
// }
// const average = sum / marks.length;
// console.log(`average marks of the class = ${average}`);

/* practice question 2
for   a given array with prices of 5 items >> [250,220,550,850,750] 
all items hav an offer of 10% off on them . change the array to store fanal price after applying offer */

// const prices = [250, 220, 550, 850, 750];
// for (let i = 0; i < prices.length; i++) {
//   let offer = (prices[i] * 10) / 100;
//   prices[i] = prices[i] - offer;
// }

// console.log(prices);

//Array Method
// Push

// const fruits = ["apple", "banana", "cherry"];

// console.log(fruits);
//ading a new fruit in an array
// fruits.push("grapes", "blackberry");
// console.log(fruits);

//Pop
// const sinobi = ["kakashi", "itachi", "shikamaru", "jiraya", "pain"];
// console.log(sinobi);
//deleting last element
// sinobi.pop("pain");

// console.log("deleted sinobi name =", sinobi);

//toString

// const places = ["tokyo", "newyork", "paris", "rome"];
// console.log(places);
//converting in to string

// console.log(places.toString());

//concat
//to join multiple arrays & return result
// const sinobi = ["kakashi", "itachi", "shikamaru"];
// const akatsuki = ["pain", "itachi", "kisame", "sasori", "konan", "tobi"];
//here we are joining two arrays
// let naruto_shippuden = sinobi.concat(akatsuki);
// console.log(naruto_shippuden);
// console.log(naruto_shippuden.toString());

//Unshift
//add to start of ararys
// const ninja = ["kakashi", "itachi", "shikamaru"];
//here we are adding new array at first
// ninja.unshift("jiraya");
// console.log(ninja);

//shift
//removes first element of array
// const sinobi = ["kakashi", "itachi", "shikamaru"];
//here we are removing first element
// let val = sinobi.shift();
// console.log(sinobi);
// console.log(val);

//slice ()
//slice returns a piece of the array
// slice(start index , end index)

// const sinobi = ["kakashi", "itachi", "shikamaru", "Minato", "jiraya"];
// console.log(sinobi);
// console.log(sinobi.slice(1, 4));

//splice ()
//splice returns a piece of the array
// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// arr.splice(3, 3, "nawang", "tashi", "lama");
// console.log(arr);
// add element
// arr.splice(0, 0, "I", "love", "javascript");
// console.log(arr);
// delet element
// arr.splice(3, 2);
// console.log(arr);
// replace element
// arr.splice(3, 1, "python");
// console.log(arr);
//question
/*create an array to store companies >> 'bloomberg ', 'google', 'microsoft', 'facebook','ubel','IBM','Netflix
a. Remove the first company from the array
b. remove Uber & Add Ola in its place 
c. add amazon at the end*/
//ans
const companies = [
  "bloomberg ",
  "google",
  "microsoft",
  "facebook",
  "uber",
  "IBM",
  "Netflix",
];
//a
// companies.shift();
// console.log(companies);
//b
companies.splice(4, 1, "ola");
console.log(companies);

//c
companies.push("amazon");
console.log(companies);
