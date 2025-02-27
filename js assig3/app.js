//Chapter 10 (if statements)

//1. var city = ''Karachi'' if (city = ''Karachi'') { console.log(''The City OF Lights'') Correct the above statement:

console.log(city&" "&''The City of Lights'')

//This is the first line of an if statement:
//if (x === y) {
//Complete the statement. If the condition is true, display a box
//that asks the user value of z? and assign it to another variable.

if (x === y) {
    var z = prompt("Enter the value of z:");
    var anotherVariable = z;
    console.log("Value of z assigned to anotherVariable:", anotherVariable);
}

//3. Code an if statement that tests if ZipCode is "10010" so, Alert
//that "Karachi". if not then alert ("Please write correct city")

if (ZipCode === "10010") {
    alert("Karachi");
} else {
    alert("Please write correct city");
}

//4. Code an if statement. Test whether a variable has a particular
//numerical value. If so, assign a new value to that variable, as in
x = 1;

var x = 1;

if (x == 1) {
    x = 10; 
    console.log("x is now:", x);
}


//Chapter 12 (if…else and else if statements)

//1. Code an if statement that tests whether the value represented by
//a variable is greater than or equal to the value represented by
//another variable. If so, display an alert. If not, display a different
//alert.

var a = 10; 
var b = 5; 

if (a >= b) {
    alert("The first value is greater than or equal to the second value.");
} else {
    alert("The first value is less than the second value.");
}

//2. Write a program using if else and else if statement which take
//marks from user. And the program will calculate your percentage
//and give you grade A/C to Your percentage. (MARKSHEET)






//3. This is the if statement that begins the code.
//if (a === 10) {
//alert("a is 10");
//}
//If a isn't 10, display an alert that says The correct value of a is
//____
//Note: Try this by yourself


if (a == 10) {
    alert("a is 10");
} else {
    alert("The correct value of a is " + a);
}


//4. Prompt the user to enter a city.
//If the city is Karachi, display an alert acknowledging it is Karachi.
//If not, check to see if it's Lahore.
//If it is, display an alert acknowledging it's Lahore.
//Otherwise, display a different alert.



var city = prompt("Enter a city:")

if (city === "karachi") {
    alert("You entered Karachi.");
} else if (city === "lahore") {
    alert("You entered Lahore.");
} else {
    alert("City not recognized.");
}



//Chapter 13 (Testing sets of conditions)


//1. Code the first line of an if statement that tests whether both are
//true: a has the same value as b and c has the same value as d.


if (a == b && c == d)


//2. Code the first line of an if statement that tests whether either or
//both are true: a has the same value as b or c doesn't have the
//same value as d.


if (a == b || c != d)


//3. Code the first line of an if statement that tests whether I.
//name is either "Hamza" or "Arsalan". II. age is Less than 60.


if ((name === "Hamza" || name === "Arsalan") && age < 60)



//4. Declare two variables and assign them number values.
//If the first variable is less than the second variable or greater than
//the second variable, display an alert.


var num1 = 10; // Example value
var num2 = 20; // Example value

if (num1 < num2 || num1 > num2) {
    alert("The numbers are not equal.");
}



//5. Declare 2 variables. Assign one of them your first name and the
//other one your last name.
//Code 2 prompts, asking for your first and your last name.
//If your answers match the two variables, display an alert.


var firstName = "Syed"; 
var lastName = "Naqi";

var userFirstName = prompt("Enter your first name:");
var userLastName = prompt("Enter your last name:");

if (userFirstName === firstName && userLastName === lastName) {
    alert("Your name matches!");
} else {
    alert("Name does not match.");
}


//Chapter 14 (If statements nested)

//1. Code an if statement enclosing a nested if. If password is not
//empty, then check if password is not greater than 5 , then display
//an alert that says "Password must be greater than 5" if greater
//than 5 then Alert "OK".


var password = prompt("Enter your password:")

if (password !== "" && password !>5) {
        alert("Password must be greater than 5");
    } else {
        alert("OK");
    }
} else {
    alert("Retry Input");
}


//2. Try this statement by yourself if (a === 1) { if (c === "Max") {
alert("OK");
}
}






//3. Code the first line of an if statement that avoids the nesting above
//by testing for multiple conditions.
//if (a === 1) { if (c
//=== "Max") {
//alert("OK");
//}
//}


if (a === 1 && c === "Max") {
    alert("OK");
}



//4. Declare two variables and assign them the same number value.
//Test two conditions, using nested if statements. Test whether the
//first variable equals the second variable and also whether it is less
//than or equal to the second variable. If the test passes—and it
//will—display an alert message.


var num1 = 10;
var num2 = 10;

if (num1 === num2) { 
    if (num1 <= num2) { 
        alert("Both numbers are equal and the condition is met!");
    }
}



