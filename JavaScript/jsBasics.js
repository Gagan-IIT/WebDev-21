// This is an inline-comment

/* This is a multi-line comment.
    We can write multiple lines of comments here 
    I'll be using comments in rest of this file
    to explain what I've written.
*/

// READING INSTRUCTIONS:
// please don't consider the variable declarations in continuous manner
// the names are used only for learning purpose. this is not a working js file
// so, variables of same names are declared mutiple times

// to declare a variable, use 'var' keyword
var myVariable;

// assigning value to variable using '=' (assignment operator)
var myName;
myName = 'localhost';

// assigning one variable's value to another variable
var myName;
myName = 'localhost';
var myUserName = myName;

// initializing variables with assignment operator
var myName = 'localhost';

/**
 * uninitialized variables contains the value undefined.
 * mathematical operators on these variables will result in undefined.
 * string operations will result in undefined string literal (i.e., "undefined")
 */

/**
 * variable names are case sensitive
 * i.e., two variables myName and myname are not same
 * Note: best practice is to use camelCase for naming variables
 */

// adding two numbers 
var mySum = 10 + 2;

// subtract
var myDifference = 10 - 2;

// multiply
var myProduct = 10 * 2;

// divide
var myQuotient = 10 / 2;

// incrementing a number
var myNum = 10;
myNum++;

// decrementing a number
var myNum = 10;
myNum--;

// creating a decimal number
var myDecimal = 10.2;

// multiplying two decimal numbers
var myDecimal1 = 2.2;
var myDecimal2 = 2.0;
var myProduct = myDecimal1 * myDecimal2;

// dividing two decimal numbers
var myDecimal1 = 4.4;
var myDecimal2 = 2.0;
var myProduct = myDecimal1 / myDecimal2;

// finding a remainder
var rem = 11 % 3;

// compound addition using augmented addition
var myNum = 10;
myNum += 2;

// compound subtraction using augmented subtraction
var myNum = 10;
myNum -= 2;

// compound multiplication using augmented multiplication
var myNum = 10;
myNum *= 2;

// compound division using augmented division
var myNum = 10;
myNum /= 2;

// declaring string variables
var myString1 = 'Single quote string';
var myString2 = "Double quote string";

// escaping quotes in the literal string using backslash
var myStringWithQuotes = "He said, \"Hello there.\".";

// quoting string with single quotes (w/o using backslash)
var myString = "Let's do it!";

/**
 * Escape Sequences:
 * 
 * Code	Output
 *  \'	single quote
 *  \"	double quote
 *  \\	backslash
 *  \n	newline
 *  \r	carriage return
 *  \t	tab
 *  \b	word boundary
 *  \f	form feed
 */

// concatenating strings with plus operator
var concatString = "Hello " + "World!";

// concatenating strings with plus equals operator
var concatString = "Hello ";
concatString += "World!";

// constructing strings with variables
var firstName = "Ross";
var greeting = "Good morning, " + firstName + ".";

// appending variables to strings
var feeling = "awesome!";
var sentence = "I'm feeling ";
sentence += feeling;

// finding length of a string
var myString = "I'm awesome.";
var myStringLenght = myString.length;

// finding first character of a string using bracket notation
var myString = "Hello World!";
var firstCharacter = myString[0];

/**
 * String Immutability:
 * ```````````````````
 *          var myString = "Jello!";
 * 
 * In JS, strings are immutable. So, the folloeing code snippet will throw an error:
 *          myString[0] = "H";
 * While, we can't modify string literals, we can reassign new literals to string variables.
 * So, the following code is the correct way:
 *          myString = "Hello";
 */

// finding nth character in a string using bracket notation (n < length of string)
var myString = "Hello";
var n = 2;
var nthCharacter = myString[n-1];

// finding last character in a string using bracket notation
var myString = "Hello World!";
var lastCharacter = myString[myString.length-1];

// finding nth-to-last character in a string (n < length of string)
var myString = "Welcome friends.";
var n = 3;
var nthToLastChar = myString[myString.length-n];

// Word Blanks (simple excercise with strings)
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";
var wordBlanks = "My " + myNoun + " is " + myAdjective + ", so he " + myVerb + " " + myAdverb + ".";

// storing mutiple values using arrays
var myList = ["HTML", "CSS", "JS"];

// nesting one array into another array
var myNestedArray = [["Jazz", "Pop", "EDM"], ["Classical", "Indie", "Sufi"]];

// accessing array data using indices
var myArray = ["Jack", "Lily", "Alex"];
var winner = myArray[1];

// modifying array data using indices (allowed in arrays unlike strings)
var myArray = [20, 30, 60, 50];
myArray[2] = 40;

// accessing multi-dimensional arrays with indices
var myArray = [["Mike",2], ["Tyke", 3]];
var maxNumber = myArray[1][1];

// appending data to the end of array
var myArray = ["Tia", "Mia", "Sia"];
myArray.push("Dia");

// popping a value off of the end of an array
var myArray = ["Tia", "Mia", "Sia"];
myArray.pop();

// popping and storing the value
var poppedValue = myArray.pop();

// removing first element of the array
var myArray = ["Tia", "Mia", "Sia"];
myArray.shift();

// adding elements in front of the array
var myArray = ["Tia", "Mia", "Sia"];
myArray.unshift("Dia");

// creating a 2-dimensional array
var myShoppingList = [
    ["Chocolate", 5],
    ["Cookies", 2],
    ["Nuts", 10],
    ["Candies", 2],
    ["Pastries", 10]
];

// writing reusable code using functions
function sayHello() {
    // prints quoted text on console screen
    console.log("Hello dear."); 
}
sayHello();     // calling the function

// passing values to functions with arguments
function functionWithArgs(param1, param2) {
    console.log(param1, param2);
}
functionWithArgs("Hello", "World!");
functionWithArgs("You're", "welcome.");

/** GLOBAL SCOPE VARIABLES
 *  Global variable: They are visible everywhere in the JS code.
 *  > variables defined outside of a function block
 *  > variables used without the var keyword (anywhere)
 */
var globalVariable = 10;
function fun1() {
  anotherGlobal = 5;
}
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

/** LOCAL SCOPE VARIABLES
 *  Local variable: Only visible within the function in which variable is defined 
 */
function myLocalScope() {
    var myLocalVar = "hello";
    console.log('inside myLocalScope', myLocalVar);
}
myLocalScope();
console.log('outside myLocalScope', myLocalVar);

// Local variable will take precedence over global variable with same name
var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}

// returning a value from a function
function plusThree(num) {
    return num + 3;
}
var answer = plusThree(5);

// the return type is undefined for function w/o return statement
function addThree(num) {
    num = num+3;
}
console.log(addThree(num));

// assigning with a returned value
function add(num1, num2) {
    return num1+num2;
}
var sum = add(3, 5);

// creating queue function using array
function standInLine(arr, item) {
    arr.push(item);
    item=arr.shift();
    return item;
}
var testArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

/** BOOLEAN DATATYPE
 *  Booleans may only be one of two values: true or false.
 *  > basically little on-off switches, where true is on and false is off
 *  > strings "true" and "false" are not Boolean and have no special meaning
 */

// conditional logics with if statements
/** pseudo code
 * if (condition is true) {
 *   statement is executed
 * }
 */
function trueOrFalse(wasThatTrue) {
    if(wasThatTrue){
        return "Yes, that was true";
    } 
    return "No, that was false";
}