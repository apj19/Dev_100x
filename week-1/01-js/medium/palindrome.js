/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  let strArray=str.toLowerCase().replace(/[^a-z]/g, "").split('');
  let str1=strArray.join('');
  let str2=strArray.reverse().join('');
  return str1 == str2;
}

module.exports = isPalindrome;
