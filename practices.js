/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

//-> sort the string first, turn it into an array, use sort
//loop thru array 1 and count the unique values, give 1+ for each unique
//one with the highest number is the winner

// function longest(string1, string2) {
//   let set = [...new Set(string1 + string2)];

//   let orderedStr = set.sort().join("");
//   return orderedStr;
// }

/* Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]*/

// function powersOfTwo(n) {
//   if (n === 0) return [1];
//   if (n === 1) return [1, 2];
//   let result = [];
//   for (let i = 0; i <= n; i++) {
//     result.push(Math.pow(2, i));
//   }
//   return result;
// }

// console.log(powersOfTwo(1));
// console.log(powersOfTwo(4));

/* Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"

"Skippy" --> "##ippy"

"Nananananananananananananananana Batman!"
-->
"####################################man!"*/

//only change the last 4
//Loop backward, and replace every character after that with an #
//Could the array, slice the last 4, add #

// // return masked string
// function maskify(cc) {
//   let lastFour = [];
//   let hash = cc.length - 4;
//   let hidden = "";
//   for (let i = cc.length - 1; i >= cc.length - 4; i--) {
//     lastFour.push(cc[i]);
//   }
//   for (let i = 0; i < hash; i++) {
//     hidden += "#";
//   }
//   return hidden + lastFour.reverse().join("");
// }

// console.log(maskify("4556364607935616"));

/*Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1. */

// function mygcd(x, y) {
//Divisor will go in BOTH x and Y,
//if the number divides by X, we need to check if it divides by Y
// Find which large number they have in common
//loop thru both numbers and check % -> push
//compare - > 2 Arrays
//find the highest number in both arrays

//   const divisorsX = [];
//   const divisorsY = [];
//   const result = [];

//   for (let i = 0; i < x; i++) {
//     if (x % i === 0) {
//       divisorsX.push(i);
//     }
//   }
//   for (let i = 0; i < y; i++) {
//     if (y % i === 0) {
//       divisorsY.push(i);
//     }
//   }
//   console.log(divisorsY);
//   console.log(divisorsX);

//   let highX = Math.max(...divisorsX);
//   let highY = Math.max(...divisorsY);

//   console.log(highX, highY);
// }
// console.log(mygcd(30, 12));

/*
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

// function even_or_odd(number) {
//   return number % 2 === 0 ? "Even" : "Odd";
// }

// console.log(even_or_odd(2));
// console.log(even_or_odd(7));
// console.log(even_or_odd(-42));

/*
Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1
*/

// function sameCase(a, b) {
//   const letters = /^[a-zA-Z]+$/;
//   if (a.match(letters) && b.match(letters)) {
//     if (a === a.toUpperCase() && b === b.toUpperCase()) return 1;
//     if (a === a.toLowerCase() && b === b.toLowerCase()) return 1;
//     return 0;
//   }
//   return -1;
// }

// console.log(sameCase("C", "B"));
// console.log(sameCase("A", "s"));

/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.
*/

// function invert(array) {
//   if (!array.length) return [];
//   return array.map((digit) => {
//     return digit * -1;
//   });
// }

// console.log(invert([1, 2, 3, 4, 5]));
// console.log(invert([]));

/* You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'*/

// function defineSuit(card) {
//   if (card.includes("♣")) return "clubs";
//   if (card.includes("♦")) return "diamonds";
//   if (card.includes("♥")) return "hearts";
//   if (card.includes("♠")) return "spades";
// }

// console.log(defineSuit("Q♠"));
// console.log(defineSuit("9♦"));

/*
Description
We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7
*/

// const stringToNumber = function (str) {
//   return parseInt(str);
// };

// console.log(stringToNumber("1234"));

/* The museum of incredible dull things
The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output= [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1] */

// function removeSmallest(numbers) {
//   if (!numbers.length) return [];
//   const smallest = Math.min(...numbers);
//   const newNumbers = [...numbers];
//   const smallestIdx = numbers.indexOf(smallest);
//   console.log(smallestIdx);
//   newNumbers.splice(smallestIdx, 1);
//   return newNumbers;
// }

// console.log(removeSmallest([1, 2, 3, 4, 5]));
// console.log(removeSmallest([2, 2, 1, 2, 1]));

/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
// */

// function highAndLow(numbers) {
//   let digitArr = numbers.split(" ");
//   let numberArray = [];
//   let result = [];
//   for (let i = 0; i < digitArr.length; i++) {
//     const digit = digitArr[i];
//     numberArray.push(parseInt(digit));
//   }
//   result.push(Math.max(...numberArray));
//   console.log(Math.max(...numberArray));
//   result.push(Math.min(...numberArray));
//   return result.join(" ");
// }

// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


// */
// function countPositivesSumNegatives(input) {
//   let count = 0;
//   let sum = 0;
//   if (input === null) return [];
//   if (input.length === 0) return [];
//   for (let i = 0; i < input.length; i++) {
//     const digit = input[i];
//     if (digit > 0) {
//       count++;
//     } else {
//       sum += digit;
//     }
//   }
//   return [count, sum];
// }

// console.log(
//   countPositivesSumNegatives([
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15
//   ])
// );

/*You are given array of integers, your task will be to count all pairs in that array and return their count.

Notes:

Array can be empty or contain only one value; in this case return 0
If there are more pairs of a certain number, count each pair only once. E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
Random tests: maximum array length is 1000, range of values in array is between 0 and 1000
Examples
[1, 2, 5, 6, 5, 2]  -->  2
...because there are 2 pairs: 2 and 5

[1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4
...because there are 4 pairs: 2, 20, 6 and 2 (again) */

// function duplicates(array) {
//   if (array.length === 0 || array.length === 1) return 0;
//   array.sort();
//   console.log(array);
//   let count = 0;
//   for (let i = 0; i < array.length - 1; i++) {
//     if (array[i] === array[i + 1]) {
//       count++;
//       i++;
//       console.log(i);
//     }
//   }
//   return count;
// }

// console.log(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2]));
// console.log(duplicates([0, 0, 0, 0, 0, 0, 0]));

/* Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

Examples (input -> output)
'! !'                 -> '! !'
'123456789'           -> ''
'This looks5 grea8t!' -> 'This looks great!'
Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.*/
// var text = '42px';
// var integer = parseInt(text, 10);
// returns 42
//
// var str = "Hello^# World/";
// str.replace(/[^a-zA-Z ]/g, ""); // "Hello World"

// function stringClean(s) {
//   return s.replace(/[0-9]/g, "");
// }

// console.log(stringClean("(E3at m2e2!!)")); //"(Eat me!!)"

/*
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
0 => [0]
*/
//

// var num = 123456;
// var digits = num.toString().split("");
// var realDigits = digits.map(Number);
// console.log(realDigits);

// function digitize(n) {
//   const digits = n.toString().split("");
//   return digits.map(Number).reverse();
// }

// console.log(digitize(35231));
// console.log(digitize(0));

/*
Kata Task
I have a cat and a dog.
I got them at the same time as kitten/puppy. That was humanYears years ago.
Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:
humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that

*/

// var humanYearsCatYearsDogYears = function (humanYears) {
//   if (humanYears === 1) {
//     return [1, 15, 15];
//   }
//   if (humanYears === 2) {
//     return [2, 24, 24];
//   }
//   if (humanYears >= 3) {
//     let catYears = 24 + (humanYears - 2) * 4;
//     let dogYears = 24 + (humanYears - 2) * 5;
//     return [humanYears, catYears, dogYears];
//   }
// };

// console.log(humanYearsCatYearsDogYears(2));
// console.log(humanYearsCatYearsDogYears(10));

// function binToDec(bin) {
//   return parseInt(bin, 2);
// }
// console.log(binToDec("1001001"));

/*
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
*/

// function betterThanAverage(classPoints, yourPoints) {
//   let average =
//     classPoints.reduce((x, y) => {
//       return x + y;
//     }) / classPoints.length;
//   console.log(average);
//   return yourPoints > average ? true : false;
// }

// console.log(betterThanAverage([2, 3], 5));
// console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));

/*Write a function that returns a string in which firstname is swapped with last name.

* nameShuffler('john McClane'); => "McClane john"
 */

/*Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty. */

// function capitalizeWord(word) {
//   let split = word.split("");
//   return split[0].toUpperCase() + word.slice(1);
// }

// console.log(capitalizeWord("word"));

/* Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly]*/

// function greet(name) {
//   return `Hello, ${name} how are you doing today?`;
// }

/*
write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.
*/

// function stringy(size) {
//   let result = [];
//   for (let i = 0; i < size; i++) {
//     if (i % 2 === 0) {
//       result.push(1);
//     } else {
//       result.push(0);
//     }
//   }
//   return result.join("");
// }

// console.log(stringy(3));
// console.log(stringy(6));

/*
In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
*/

// function findMultiples(integer, limit) {
//   let result = [];
//   for (let i = integer; i <= limit; i++) {
//     if (i % integer === 0) {
//       result.push(i);
//     }
//   }
//   return result;
// }
// console.log(findMultiples(5, 25)); //[5, 10, 15, 20, 25]
// console.log(findMultiples(4, 27)); //[4, 8, 12, 16, 20, 24]

/*Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo"
name + " does not play banjo"
Names given are always valid strings. */

// function areYouPlayingBanjo(name) {
//   if (name.startsWith("R") || name.startsWith("r")) {
//     return `${name} plays banjo`;
//   } else {
//     return `${name} does not play banjo`;
//   }
// }

// console.log(areYouPlayingBanjo("Adam"));
// console.log(areYouPlayingBanjo("Ringo"));

/*
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
// */
// function removeEveryOther(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i += 2) {
//     result.push(arr[i]);
//   }
//   return result;
// }
// console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"])); //['Hello', 'Hello Again']
// console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //[1, 3, 5, 7, 9]

/*
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!
*/

// const rps = (p1, p2) => {
//   if (p1 === "rock" && p2 === "paper") {
//     return "Player 2 won!";
//   }
//   if (p1 === "rock" && p2 === "scissors") {
//     return "Player 1 won!";
//   }
//   if (p1 === "rock" && p2 === "rock") {
//     return "Draw!";
//   }
//   if (p1 === "paper" && p2 === "paper") {
//     return "Draw!";
//   }
//   if (p1 === "paper" && p2 === "rock") {
//     return "Player 1 won!";
//   }
//   if (p1 === "paper" && p2 === "scissors") {
//     return "Player 2 won!";
//   }
//   if (p1 === "scissors" && p2 === "scissors") {
//     return "Draw!";
//   }
//   if (p1 === "scissors" && p2 === "rock") {
//     return "Player 2 won!";
//   }
//   if (p1 === "scissors" && p2 === "paper") {
//     return "Player 1 won!";
//   }
// };

/*
Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

each_cons([1,2,3,4], 2)
  #=> [[1,2], [2,3], [3,4]]

each_cons([1,2,3,4], 3)
  #=> [[1,2,3],[2,3,4]]

As you can see, the lists are cascading; ie, they overlap, but never out of order.
*/

//create a map on the array
//map(element, index) <- we want the index
//slice, start at 'index' of the map, second number is index + n
//filter out element.length === n

// function eachCons(array, n) {
//   let mapped = array.map((x, index) => {
//     return array.slice(index, index + n);
//   });
//   return mapped.filter((x) => x.length === n);
// }

// const lst = [3, 5, 8, 13];
// console.log(eachCons([3, 5, 8, 13], 1));
// console.log(eachCons(lst, 2));
// console.log(eachCons(lst, 3));

/*
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
*/

// function basicOp(operation, value1, value2) {
//   if (operation === "+") return value1 + value2;
//   if (operation === "-") return value1 - value2;
//   if (operation === "*") return value1 * value2;
//   if (operation === "/") return value1 / value2;
// }

/*Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello" */

// function repeatStr(n, s) {
//   let string = "";
//   console.log(s);

//   for (let i = 0; i <= n; i++) {
//     string += s;
//   }

//   return string;
// }
// console.log(repeatStr(5, "#"));

/*
Issue
Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

Task
Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

Example
Input: 1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8
*/
// //return Set

// function pipeFix(numbers) {
//   let result = [];
//   let max = Math.max(...numbers);
//   let min = Math.min(...numbers);
//   for (let i = min; i <= max; i++) {
//     result.push(i);
//   }
//   return result;
// }

// console.log(pipeFix([1, 2, 3, 5, 6, 8, 9])); //[1,2,3,4,5,6,7,8,9]
// console.log(pipeFix([1, 2, 3, 12])); //[1,2,3,4,5,6,7,8,9,10,11,12]
// console.log(pipeFix([-1, 4]));

/*
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/

// var countSheep = function (num) {
//   let sheepStr = "";
//   for (let i = 0; i < num; i++) {
//     sheepStr += `${i + 1} sheep...`;
//   }
//   return sheepStr;
// };
// console.log(countSheep(3));

/*You probably know the 42 number as "The answer to life, the universe and everything" according to Douglas Adams' "The Hitchhiker's Guide to the Galaxy". For Freud, the answer was quite different.

In the society he lived in, people-women in particular- had to repress their sexual needs and desires. This was simply how the society was at the time. Freud then wanted to study the illnesses created by this, and so he digged to the root of their desires. This led to some of the most important psychoanalytic theories to this day, Freud being the father of psychoanalysis.

Now, basically, when a person hears about Freud, s/he hears "sex" because for Freud, everything was basically related to, and explained by sex.

In this kata, the toFreud() function will take a string as its argument, and return a string with every word replaced by the explanation to everything, according to Freud. Note that an empty string, or no arguments, should result in the ouput being ""(empty string).

 */

// function toFreud(string) {
//   let word = string.split(" ");
//   let result = [];
//   if (string.length === 0) return "";
//   for (let i = 0; i < word.length; i++) {
//     const element = word[i];
//     console.log(element);
//     result.push(element.replace(element, "sex"));
//   }
//   return result.join(" ");
// }

// console.log(toFreud("This is a test"));
// console.log(toFreud(""));

/*
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

// function bmi(weight, height) {
//   let bmi = weight / height ** 2;
//   console.log(bmi);
//   if (bmi <= 18.5) return "Underweight";
//   if (bmi <= 25) return "Normal";
//   if (bmi <= 30) return "Overweight";
//   if (bmi > 30) return "Obese";
// }
// console.log(bmi(80, 1.8));

/* You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.*/

// function getAge(inputString) {
// return the girl's correct age as an integer. Happy coding :)
//   return parseInt(inputString[0]);
// }
// console.log(getAge("4 years old")); //4

/*ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false */

function validatePIN(pin) {
  const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }
  console.log(pin);
  let arr = pin.split("");
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    const digit = arr[i];
    if(arr.every())
  }
}

// console.log(validatePIN("1"));
// console.log(validatePIN("00000000"));
console.log(validatePIN("1234"));
