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
*/
function highAndLow(numbers) {
  let digitArr = numbers.split(" ");
  let numberArray = [];
  let result = [];
  for (let i = 0; i < digitArr.length; i++) {
    const digit = digitArr[i];
    numberArray.push(parseInt(digit));
  }
  result.push(Math.max(...numberArray));
  console.log(Math.max(...numberArray));
  result.push(Math.min(...numberArray));
  return result.join(" ");
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
