// 36. Check if a number is positive, negative, or zero
let num = -10;
if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}


// 37. Multi-branch if-else to determine letter grades
let score = 78;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}


// 38. Display "Morning" or "Evening" based on the current hour
let hour = new Date().getHours(); // gets current hour (0–23)
if (hour < 12) {
  console.log("Morning");
} else {
  console.log("Evening");
}


// 39. Check if a user is logged in and display a welcome message
let isLoggedIn = true;
if (isLoggedIn) {
  console.log("Welcome back, User!");
} else {
  console.log("Please log in.");
}


// 40. Determine if a number is a multiple of 3 and 5
let n = 30;
if (n % 3 === 0 && n % 5 === 0) {
  console.log(n + " is a multiple of 3 and 5");
} else {
  console.log(n + " is NOT a multiple of 3 and 5");
}
