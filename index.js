// 1. Function that takes a number and returns its square
function square(num) {
  return num * num;
}
console.log(square(5)); // 25


// 2. Function that takes two numbers and returns their sum
function sum(a, b) {
  return a + b;
}
console.log(sum(3, 7)); // 10


// 3. Function that checks if a string is a palindrome
function isPalindrome(str) {
  let reversed = str.split('').reverse().join('');
  return str === reversed;
}
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false


// 4. Function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120


// 5. Function that reverses a given array
function reverseArray(arr) {
  return arr.reverse();
}
console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]
