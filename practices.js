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

function mygcd(x, y) {
  //Divisor will go in BOTH x and Y,
  //if the number divides by X, we need to check if it divides by Y
  // Find which large number they have in common
  //loop thru both numbers and check % -> push
  //compare - > 2 Arrays
  //find the highest number in both arrays

  const divisorsX = [];
  const divisorsY = [];
  const result = [];

  for (let i = 0; i < x; i++) {
    if (x % i === 0) {
      divisorsX.push(i);
    }
  }
  for (let i = 0; i < y; i++) {
    if (y % i === 0) {
      divisorsY.push(i);
    }
  }
  console.log(divisorsY);
  console.log(divisorsX);

  let highX = Math.max(...divisorsX);
  let highY = Math.max(...divisorsY);

  console.log(highX, highY);
}
console.log(mygcd(30, 12));
