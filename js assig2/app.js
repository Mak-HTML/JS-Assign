//Chapter 6 (Math Expression II)

//1. Code a short form of x = x + 1; Use either of the two legal
//expressions.

x++;

//2. If x has a value of 100, what is the fastest way to reduce it to 99
with a math expression?

x--;


//3. var x = 50; var y = x++;
//What is the value of y?

y = 50  


//4. var y = 50; var z = --y;
//What is the value of z?

z = 49


//5. In a single statement, decrement num and assign its original value
//to newNum.

var newNum = num--;

//6. In a single statement add 1 to a variable and assign its original
//value to another variable.

var newVar = myVar++



//7. Assign a number value to a variable. Increment the variable.
//Display the new value in an alert


var num = 5;
num++; 
alert(num); 


//Chapter 7 (Math Expression III)

//1. var calculatedNum = 2 + (2 * 6); What
//is the value of calculatedNum? 

calculatedNum = 14


//2. var calculatedNum = (2 + 2) * 6; What is the
//value of calculatedNum?   


calculatedNum = 24

//3. var calculatedNum = (2 + 2) * (4 + 2);
What is the value of calculatedNum?

calculatedNum = 24


//4. var calculatedNum = ((2 + 2) * 4) + 2;
What is the value of calculatedNum?

calculatedNum = 18


//5. Write a statement that assigns to cost the result of 2 + 2 * 4 + 10,
//clarified with parentheses, producing 56.

var cost = (2 + 2) * (4 + 10);


//6. Write a statement that assigns to units the result of 2 + 2 * 4 + 10,
//clarified with parentheses, producing 20.


var units = 2 + (2 * 4) + 10;


//7. Write a statement that assigns to pressure the result of 4 / 2 * 4,
//clarified with parentheses, producing 5.





//Chapter 8 (Concatenating Text Strings)


//1. var num = "2" + "2";
//What is the value of num? Include quotation marks.


"22"


//2. message = ("Hello," + "Dolly");
//What is the value of message? (Include the quotation marks.)
//Alert the statement


"Hello,Dolly"


//3. alert("33" + 3);
//What message displays in the alert box?


333


//4. Write an alert that displays the concatenation of the two parts of "Pakistan Zindabad".


alert("Pakistan" + " " + "Zindabad");


//5. Write a statement that assigns to a variable the concatenation of a string with a number.


var result = "Age: " + 25;


//6. Assign strings to two variables. Then concatenate them and assign
//the result to a third variable.


var firstName = "Syed";
var lastName = "Naqi";
var fullName = firstName + " " + lastName;

alert(fullName);


//Chapter 9 (Prompts)

//1. Code a prompt with the message "Enter first name". The user's
//response is assigned to firstName.


var firstName = prompt("Enter first name");


//2. Code a prompt with the message "Country?" and the default
//answer "China". The user&#39;s response is assigned to country.


var country = prompt("Country?", "China");


//3. Correct this statement var yourName = prompt(Enter Your Name");


var yourName = prompt("Enter Your Name");




//4. Code a prompt that specifies a string as the message Include a default input.


var userInput = prompt("Enter your favorite color:", "Blue");



//5. Assign strings to two variables. Code a prompt specifying the first
//variable as the message and the second variable as the default
//response. Assign the user&#39;s response to a third variable.


var message = "Enter your favorite fruit:";  
var userInput = "Mango";  
var result = prompt(message, userInput);


//6. Display a prompt, including both a message and a default response. Display the user&#39;s response in an alert.







