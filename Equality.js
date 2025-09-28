// 21. Check if two values are equal using ==
let a = 5;
let b = "5";
console.log(a == b); // true (because == does type conversion)


// 22. Compare two variables using strict equality ===
let x = 10;
let y = "10";
console.log(x === y); // false (because === checks type + value)


// 23. Check if two values are not equal using !=
let num1 = 20;
let num2 = 15;
console.log(num1 != num2); // true


// 24. Strict inequality comparison between two variables (!==)
let p = 7;
let q = "7";
console.log(p !== q); // true (different types)


// 25. Use !== to check if two values are not strictly equal
let val1 = 100;
let val2 = 100;
console.log(val1 !== val2); // false (same type and same value)
