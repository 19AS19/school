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
