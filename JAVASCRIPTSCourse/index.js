console.log("hello")


//alert("yoo")


//Variable
var b ='smoothie';
//console.log(b);

var someNumber= 45;
//console.log(someNumber);


//var age = prompt("What is your age?");
//document.getElementById('someText').innerHTML = age;

//Numbers in Javascript

// how to increment 
var num1 = 10;
num1++
//num1= num1+1
console.log(num1);

// how to decrement 

//num1=num1-1
num1--
console.log(num1)

// increment or decrement by any number by 10 for example

num1 +=10;
console.log(num1);



// divide, multiply,*, remiander %

console.log(num1 % 5 );

/*function
1. create a function
2. call a function
*/
// Create
function fun(){
    console.log("this is a fucntion");
}
//call
fun();

/* let create a function that take in a name
and says hello followed by your name*/

var name = 'philia';
function Name(){
    console.log("hello"+' '+ name);

}
//Name();
function greeting(yourName){

var result = 'hello' + ' ' + yourName;
console.log(result);
}

var name = prompt('What is your name?');
//greeting(name);


// How do arguments work in functions?
// How do we add two numbers together in a function
function sumNumbers(num1, num2){
    var result= num1 + num2;
    console.log(result)
}
//sumNumbers(10,10);









