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