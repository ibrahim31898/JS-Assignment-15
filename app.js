
// (Date & Time)

// 1.
let dObj = new Date();

// 2.
let dStr = new Date().toString();

// 3.
let day = new Date().getDay();

// 4.
let d = new Date();
let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
alert(dayNames[d.getDay()]);

// 5.
let dateAndTime = new Date();

// 6.
let later = new Date(2020, 11, 31);

// 7.
let specificDate = new Date(1992, 1, 2);

// 8.
alert(new Date(1980, 0, 1).getTime());

// 9.
let myDate = new Date();
myDate.setFullYear(2023);

// 10.
function changeMonthToJanuary(inputDate) {
  inputDate.setMonth(0);
  return inputDate;
}

// 11.
// There is no direct method to change the day of the week for a specific date in JavaScript.
// The day of the week is determined by the date itself.



// 12.
function changeMinutes(inputTime) {
  let newMinutes = prompt('Enter the new minutes:');
  inputTime.setMinutes(newMinutes);
  return inputTime;
}

// 13.
function addHours(inputTime, hoursToAdd) {
  inputTime.setHours(inputTime.getHours() + hoursToAdd);
  return inputTime;
}

// 14.
function calculateAge(birthDate) {
  const now = new Date();
  const birthYear = birthDate.getFullYear();
  const currentYear = now.getFullYear();
  const age = currentYear - birthYear;
  return age;
}


let birthDate = new Date(1990, 5, 15);
let age = calculateAge(birthDate);
console.log("Age: " + age);


// (Functions)


// 1.
function displayAlert() {
    
  }
  
  // 2.
  function askName() {
    let userName = prompt("Enter name");
  }
  
  // 3.
  function callTwoFunctions() {
    function1();
    function2();
  }
  
  // 4.
  function promptAndAlertName() {
    let name = prompt("Enter name");
    alert(name);
  }

  promptAndAlertName();
  
  // 5.
  function concat(a, b, c, variable, str, num) {
    
  }
  
  // 6.
  function concatenateParameters(param1, param2) {
    let result = param1 + param2;
  }
  
  // 7.
  function multiplyParameters(param1, param2, param3) {
    let result = param1 * param2 * param3;
  }
  
  // 8.
  function calculateAverage(numbers) {
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum / numbers.length;
  }
  
  // 9.
  function sumTwoNumbers(a, b) {
    return a + b;
  }
  
  // 10. 
  function changeMonthToJanuary(inputDate) {
      inputDate.setMonth(0);
    return inputDate;
  }
  
  
  let currentDate = new Date();
  console.log("Original Date:", currentDate);
  
  changeMonthToJanuary(currentDate);
  
  console.log("Modified Date:", currentDate);
  
  
  // 11.
  function addNumbers(a, b) {
    return a + b;
  }
   
  let result = addNumbers(3, 5);
  
  console.log(result); 
  
  
  // 12.
  function letterCounts(word) {
    let counts = {};
    for (let letter of word) {
      counts[letter] = (counts[letter] || 0) + 1;
    }
    return counts;
  }
  
  // 13.
  function setYear(date, year) {
    date.setFullYear(year);
  }
  
  // 14.
  function calculateAge(dateOfBirth) {
    let currentDate = new Date();
    let birthDate = new Date(dateOfBirth);
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    return age;
  }
  
  // 15.
  function checkPresence(word, array) {
    return array.includes(word);
  }
  
  // 16.
  function repeatLetter(letter, times) {
    return letter.repeat(times);
  }
  
  // 17.
  function reverseArray(arr) {
    return arr.reverse();
  }
  
  // 18.
  function reverseNumber(x) {
    return parseInt(x.toString().split('').reverse().join(''));
  }
  
  // 19.
  function isPalindrome(str) {
    return str === str.split('').reverse().join('');
  }
  
  // 20.
  function capitalizeFirstLetterOfEachWord(sentence) {
    return sentence.replace(/\b\w/g, c => c.toUpperCase());
  }
  
  // 21.
  function findLowestAndGreatestNumbers(numbers) {
    let lowest = Math.min(...numbers);
    let greatest = Math.max(...numbers);
    return [lowest, greatest];
  }
  
  
  let sampleArray = [1, 2, 3, 4, 5];
  let [lowest, greatest] = findLowestAndGreatestNumbers(sampleArray);
  console.log("Lowest:", lowest, "Greatest:", greatest);
  


//   (Local vs Global Variables)


// 1.
function demonstrateLocalVariable() {
    let x = 10;
    console.log("Inside the function: x =", x);
  }
  
  demonstrateLocalVariable();
  

  // 2.
let globalVar = 20;

function accessGlobalVariable() {
  console.log("Inside the function: globalVar =", globalVar);
}

accessGlobalVariable();

console.log("Outside the function: globalVar =", globalVar);

  

// (Switch Statements)


// 1.
let dayOfWeek = 3; 

switch (dayOfWeek) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day of the week.");
}


 // 2.
let cityName = prompt("Enter the city name:");

switch (cityName.toLowerCase()) {
  case "new york":
    alert("You entered New York!");
    break;
  case "london":
    alert("You entered London!");
    break;
  case "tokyo":
    alert("You entered Tokyo!");
    break;
  default:
    alert("City not recognized. Please enter a valid city name.");
}
