/*
myArray = [1,1,2,3,2,4,7,5,7,8,9,1];
var resultArray = []
for(i=0;i<myArray.length;i++){
    if (!resultArray.includes(myArray[i])) {
        resultArray.push(myArray[i]) 
        continue
    }
       
}
console.log(resultArray);
*/

function rng(min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
}

function rag(min, max, length){
    let result = [];
    for(i=0;i<length;i++){
        result.push(rng(min, max))
    }
    return result
}

myArray = rag(1,10,100)
for(i=0;i<myArray.length;i++){
    if (!resultArray.includes(myArray[i])) {
        resultArray.push(myArray[i]) 
        continue
    }
       
}