// 41. Return a weekday based on a number (1-7)
let day = 3;
switch (day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  case 4: console.log("Thursday"); break;
  case 5: console.log("Friday"); break;
  case 6: console.log("Saturday"); break;
  case 7: console.log("Sunday"); break;
  default: console.log("Invalid day");
}


// 42. Identify the type of a given fruit
let fruit = "apple";
switch (fruit) {
  case "apple": console.log("Apple is a red or green fruit."); break;
  case "banana": console.log("Banana is a yellow fruit."); break;
  case "orange": console.log("Orange is a citrus fruit."); break;
  case "mango": console.log("Mango is a tropical fruit."); break;
  default: console.log("Unknown fruit");
}


// 43. Determine a month's season based on month number
let month = 11;
switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Winter");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Spring");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Summer");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Autumn");
    break;
  default:
    console.log("Invalid month");
}


// 44. Handle different operations (+, -, *, /)
let operator = "*";
let a = 8, b = 4;
switch (operator) {
  case "+": console.log(a + b); break;
  case "-": console.log(a - b); break;
  case "*": console.log(a * b); break;
  case "/": console.log(b !== 0 ? a / b : "Cannot divide by zero"); break;
  default: console.log("Invalid operator");
}


// 45. Return the number of days in a given month (1-12)
let m = 2;
switch (m) {
  case 1: case 3: case 5: case 7: case 8: case 10: case 12:
    console.log("31 days");
    break;
  case 4: case 6: case 9: case 11:
    console.log("30 days");
    break;
  case 2:
    console.log("28 or 29 days (leap year)");
    break;
  default:
    console.log("Invalid month");
}
