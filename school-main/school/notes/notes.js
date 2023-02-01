//this is a comment. It does not show in code.

/*
multi-line comment
this is almost useless
*/

//variables
/*
there are two ways to declare variables in javascript

var a = 1; and
let a = 10;

const x = 20; this makes x constant with the value 20
*/
let a=10;
console.log(a);
const x=20;
console.log(x);

/*
variables are case sensitive
    let bob = 10;
    let Bob = 10;
*/

/*
datatypes
    numbers
    strings
    booleans
*/
let temp = 10 //datatype "number"
let temp1 = "10" //datatype "string"

//all numbers in javascript are floating point numbers

/*
all variable names in javascript must begin with a letter
or an underscore "_", You can not use a reserved word as a variable name.
*/

//arithmetic Operation

//addition
console.log(5+2);
console.log("abc"+"def");
//subtraction
console.log(10-6);
//multiplication
console.log(5*2);
//exponent
console.log(3**4);
//increment
let h = 11;
console.log(h++); //this prints 11
console.log(h); //this prints 12

let k = 10;
console.log(++k);//this prints 11

// while loops execute a statement or code
// as long as the expression is true

let count=0;
while(count<10){
    console.log(count);
    count++; //count = count+1
}

// do while loop
// always runs the code
// at least once
do{
    console.log(count);
    count++;
}while(count<20);

/* for loops
for (initialization; test condition; increment statement){
    CODE IN HERE WILL WORK IF THE TEST CONDITION IS TRUE
}

INITIALIZATION: this step executes first. it only executes once.
you can declare and initialize a loop control variable here. it is
optional, but you must put in a semi-colon at the end ;

TEST CONDITION: if the test condition is true the block of code executes,
otherwise, it does not.
*/

//EXAMPLE

for(let i=0; i<2; i++){
    console.log("hello", i);
}
//we get the same output from this
let j = 0;
for(;j<2;j++){
    console.log("hello", j);
}
//we get the same output from this
let z = 0;
for(;z<2;){
    console.log("hello", z);
    z++
}

// BREAK STATEMENT / leaves loop
let j = 0;
document.write("Entering loop:<br>");
while(b<20){
    h = h+1;
    if(h==5){
        break;
    }
    document.write(h+"<br>");
}
document.write("Leaving loop:<br>");

// CONTINUE
let b = 0;
document.write("Entering loop:<br>");
while(b<20){
    h = h+1;
    if(h==5){
        continue;
    }
    document.write(h+"<br>");
}
document.write("Leaving loop:<br>");

/*
THE ARRAY OBJECT ALLOWS YOU TO STORE MULTIPLE
VALUES IN A SINGLE VARIABLE

IT STORES A FIXED SIZE, SQUENTIAL COLLECTION
OF ELEMENTS OF THE SAME OR MIXED TYPE
*/

//TO CREATE ARRAY

let myArray = new Array["apples", "oranges"]
let myArray2 = ["apples", "oranges"]

//TO ACCESS ELEMENTS OF AN ARRAY WE USE INDEXING
//INDEXING IS WHEN YOU TYPE THE ARRAY NAMe FOLLOWED
//BY SQUARE BRACKETS. THE NUMBER YOU PUT BETWEEN
//THE SQUARE BRACKETS IS THE NUMBER OF THE ELEMENT
//IN THE ARRAY YOU WISH TO ACCESS.

//ALL ARRAYS START WITH INDEX VALUE 0
document.write(myArray2[0]); // This prints apples
document.write(myArray2[1]); // This prints oranges 

//TO CHANGE AN ARRAY ELEMENT
//USE INDEXING TO LOCATE THE ELEMENT AND THEN
//AN ASSIGNMENT OPERATION TO ASSIGN A NEW VALUE

myArray[0] = "Lemon";
document.write(myArray2[0]);
document.write("<br>");
//VERY IMPORTANT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
document.write(myArray2);
myArray2[10] = "test";
document.write(myArray2);

//TO ADD ELEMENTS TO AN ARRAY YOU CAN USE THE
//PUSH COMMAND
//END OF THE ARRAY

myArray2.push("Lime");

//TO REMOVE THE LAST ELEMENT FROM AN ARRAY YOU
//CAN USE THE POP COMMAND
myArray22.pop(); //THIS REMOVES THE LAST ELEMENT
//THE new Array() COMMAND OR A PAIR OF EMPTY
//SQUARE BRACKETS

let myArray3 = new Array();
let myArray4 = [];

//TO USE A FOR LOOP TO ACCESS THE ARRAY ELEMENTS
//TO ADD ELEMENTS USING A FOR LOOP
for(let i=0;i<10;i++){
    myArray4[i]=i;
}
document.write("<br>");
document.write(myArray4);
document.write("<br");
document.write(myArray4.length);
