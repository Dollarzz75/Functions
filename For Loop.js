// 46. Print the first 10 positive integers
for (let i = 1; i <= 10; i++) {
  console.log(i);
}


// 47. Display each character in a string
let word = "JavaScript";
for (let i = 0; i < word.length; i++) {
  console.log(word[i]);
}


// 48. Find the sum of numbers from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Sum =", sum); // 5050


// 49. Calculate the factorial of a number
let num = 5;
let factorial = 1;
for (let i = 1; i <= num; i++) {
  factorial *= i;
}
console.log("Factorial of", num, "=", factorial); // 120


// 50. Print even numbers up to 20
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}
