# Functions

**What is a function?**

A function is a self contained piece of code that carries out a particular task.

## Advantages of functions
> * Allow us to do modular programming i.e to separate the program into independant modules or peices - each of which performs a specific task
* Reusable so assist in avoiding:
    * Wasting time retyping code
    * Copying and pasting errors
    * Time updating the same peice of code in multiple places

## Function definition
> * Before we can use a function, we need to define it
* An easy way to define a function in javascript is by using the fuctino keywordm followed by:
    * a unique function name followed by round brackets ()
    * a list of parameters if required
    * a statement block surrounded by curly braces
    * a return statement if required

When you write the code for a funcrion it is called the function definition
```js
function function_name(parameter_one, parameter_two) {
        return statements
}
```

**OR**
```js
const function_name = (parameter_one, parameter_two) => statements
```

## Calling a function
> * When you wish to use the function in your programme, you need to type the name of the function and pass any arguments.
> * When you type the name of the function it is said to be a 'function call'
> * The arguments in a function call are the values passed to the parameter in the function definition

## Pass by value and Pass by reference
> * When you call a function and you type in the arguments, the arguments are said to be passed to the function where they are processed
* There are two ways of passing arguments:
    * Pass by value
    * Pass by reference

**Pass by value**
* In pass by value, a copy of the argument is made to a new memory location.
* He values in this location are passed inot the function and the original value is not changed by any processing done in the function

```js
x = 10;
console.log("Starting ", typeof(x), "is: ", x);
call_me(x);
console.log("Ending ", typeof(x), "is: ", x);

function call_me(params) {
    
    if(typeof(params) == "number"){
        params = params + 1;
    }

    console.log("params", typeof(params), " is: ", params);
}
```

**Strings are also passed by value:**

```js
x = "Hello";
console.log("Starting ", typeof(x), "is: ", x);
call_me(x);
console.log("Ending ", typeof(x), "is: ", x);

function call_me(params) {
    
    if(typeof(params) == "string"){
        params = params + "__string"
    }

    console.log("params", typeof(params), " is: ", params);
}
```

**pass by reference**
* In pass by reference, the location of the argument in memory is passed into the function and the original value is changed by any processing done in the function.
* There is no new memory used

```js
x = [1,2,3,4,5];
console.log("array type is ", x.constructor.name);
console.log("Starting ", x.constuctor.name, "is: ", x)
call_me(x);
console.log("Ending ", x.constructor.name, "is: ", x);

function call_me(params) {
    
    if(x.constructor.name == "Array"){
       for(i=0;i<params.length; i++){
        params[i] = params[i]+1
       }
    }

    console.log("params", typeof(params), " is: ", params);
}
```