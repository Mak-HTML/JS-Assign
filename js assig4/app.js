//Chapter 15 (Array I)


//1. Declare an empty array.

// var myArray = [];


//2. Code an array with 1 string element


//var myArray = ["Hello"];


//3. var alphabet = ["h","i","j","k"]. Now print the letter “j” in alert using array index


//var alphabet = ["h", "i", "j", "k"];
//alert(alphabet[2]);


//4. var alphabet=["h","i","j","k", “l”,”m”, “n”, “o”]. Find the total length of array.

//



//Chapter 16 (Array II)


//1. Code an array with 1 string element.
//Add an additional element to the array using push.
//Create an alert whose message is the last element. using index

//var myArray = ["First Element"]
//myArray.push("Second Element");
//alert(myArray[1]);


//2. var Alphabet=["h","i","j","k"]
//Remove the last element from the array Alphabet.

//var Alphabet = ["h", "i", "j", "k"];
//Alphabet.pop();
//console.log(Alphabet);

//3. var Alphabet=["h","i","j","k"]
//Add a new element, a number, to the end of an array.

//var Alphabet = ["h", "i", "j", "k"];
//Alphabet.push(5);
//console.log(Alphabet);


//Chapter 16 (Array III)


//1. var sizes = ["S", "M", "XL", "XXL", "XXXL"].Remove the first element of an array.

//var sizes = ["S", "M", "XL", "XXL", "XXXL"];
//sizes.shift();
//console.log(sizes);


//2. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
//Add three number elements to the beginning of an array.

//var sizes = ["S", "M", "XL", "XXL", "XXXL"];
//sizes.unshift(1, 2, 3);
//console.log(sizes);


//3. Declare an array with one element.
//Add a second element to the beginning of the array.
//Create an alert whose message is the new first element.

//var myArray = ["First Element"];
//myArray.unshift("New First Element");
//alert(myArray[0]); 



//4. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
//Insert "L" into the array between "M" and "XL".

//var sizes = ["S", "M", "XL", "XXL", "XXXL"];
//sizes.splice(2, 0, "L"); 
//console.log(sizes); 


//5. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
//Copy the first 3 sizes of the array and put them into a new array, regSizes.


//var sizes = ["S", "M", "XL", "XXL", "XXXL"];
//var regSizes = sizes.slice(0, 3);
//console.log(regSizes);


//6. var pets = ["dog", "cat", "ox", "duck", "frog"].
//Add 2 elements after "dog" and remove "cat", "ox", and "duck".


//var pets = ["dog", "cat", "ox", "duck", "frog"];
//pets.splice(1, 3, "parrot", "rabbit");
//console.log(pets);



//7. var pets = ["dog", "cat", "ox", "duck", "frog"];
//Remove "cat" and "ox".


//var pets = ["dog", "cat", "ox", "duck", "frog"];
//pets.splice(1, 2); 
//console.log(pets);


//8. var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
//Reduce it to "duck" and "frog" using slice.


//var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
//var reducedPets = pets.slice(3, 5);
//console.log(reducedPets);

 


