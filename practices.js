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

function stringy(size) {
  let result = [];
  for (let i = 0; i < size; i++) {
    if (i % 2 === 0) {
      result.push(1);
    } else {
      result.push(0);
    }
  }
  return result.join("");
}

console.log(stringy(3));
console.log(stringy(6));
