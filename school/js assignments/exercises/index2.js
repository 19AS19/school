//ASSIGNMENT 1

let a_Number = Number(prompt("1. Enter a number:"));
console.log(a_Number%2 ==0?"1.Your number is even":"1.Your number is odd");

//ASSIGNMENT 2

let b_numberOne = Number(prompt("2. Enter your first number:"));
let b_numberTwo = Number(prompt("2. Enter your second number"));
if(b_numberOne>b_numberTwo){
    console.log("2.Your first number is greater than your second number");
}else if(b_numberOne<b_numberTwo){
    console.log("2.Your second number is greater than your first number");
}else{
    console.log("2.Your numbers have the same value");
}

//ASSIGNMENT 3

let c_numberOne = Number(prompt("3. Enter your first number:"));
let c_numberTwo = Number(prompt("3. Enter your second number:"));
let c_numberThree = Number(prompt("3. Enter your third number:"));
if(c_numberOne>c_numberTwo){
    if(c_numberOne>c_numberThree){
        console.log("3. Your first number is the greatest");
    }  
}  
else if (c_numberTwo > c_numberThree){
    console.log("3. Your second number is the greatest");
} else{
    console.log("3. Your third number is the greatest");
}

//ASSIGNMENT 4

let d_side1 = Number(prompt("4. Enter your first side:"));
let d_side2 = Number(prompt("4. Enter your second side:"));
let d_side3 = Number(prompt("4. Enter your third side:"));
if(d_side1==d_side2 && d_side1==d_side3){
    console.log("4. Your triangle is equilateral")
}else{
    console.log((d_side1==d_side3 || d_side3 == d_side2 || d_side2 == d_side1)?"4. Your triangle is isosceles":"4. Your triangle is scalene");
}

//ASSIGNMENT 5

let num1 = Number(prompt("5. Enter your first number:"));
let operation = prompt("5. Enter your operation");
let num2 = Number(prompt("5. Enter your second number."));
let result
if (operation == "+"){
    result = num1+num2;
}else if (operation == "-"){
    result = num1-num2;
}else if (operation == "/"){
    result = num1/num2;
}else if (operation == "*"){
    result = num1*num2;
}else if (operation == "%"){
    result = num1%num2;
}else{
    console.log("5. Invalid Operation");
}

console.log("5. Your result is: "+result);