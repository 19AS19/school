let array = [-5,-4,-3,-2,-1,1,2,3,4,5];
let superarray = ["super","man","duper"];
//part.1
/*
for(let i=0;i<array.length;i++){
    console.log(array[i]);
}
*/

//part.2
/*
for(i=0;i<array.length;i++){
    if(array[i]<0){
        console.log(array[i]);
    }
}
*/

//part.3
/*
var sum = 1
for(i=0;i<array.length;i++){
    sum *= array[i]
}
console.log(sum)
*/

//part.4
/*
var max = array[0];
var min = array[0];
for(i=0;i<array.length;i++){
    if(max>array[i]){
        max = array[i];
    }
    if(min<array[i]){
        min = array[i]
    }
}
console.log(`min = ${min}`); console.log(`max = ${max}`);
*/

//part.5
/*
var secondmax = array[0];
var max = array[0];
for(i=0;i<array.length;i++){
    if(max<array[i]){
        secondmax = max
        max = array[i];
    }
}
console.log(`second max = ${secondmax}`);
*/

//part.6
/*
var odd = 0; var even = 0
for(i=0;i<array.length;i++){
    if(array[i]%2==0){
        even += 1
    }else{
        odd += 1
    }
}
console.log(`odd = ${odd}`); console.log(`even = ${even}`);
*/

//part.7
/*
let empty = [];
for(i=0;i<array.length;i++){
    empty.push(array[i]);
}
console.log(empty);
*/

for(i=0;i<array.length;i++){
    superarray.push(array[i]);
}
console.log(superarray);

for(i=0;i<superarray.length;i++){
    if(typeof superarray[i] == "number"){
        superarray.slice(i, i);
    }
}
console.log(superarray);