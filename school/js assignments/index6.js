//part.1
var number = 0
while(number<=10){
    console.log(number)
    number++
};

//part.2
var numberEven = 0
while(numberEven < 100) {
    numberEven ++
    if (numberEven%2 == 0){
        console.log(numberEven)
    }
};

//part.3
var powerOne = Number(prompt("power numbero uno"));
var powerTwo = Number(prompt("power numbero dos"));
var powerCount = 0
var powerThree = 1
while (powerCount < powerTwo){
    powerThree = powerThree * powerOne
    powerCount ++
    if(powerCount == powerTwo){
        console.log(powerThree)
    }
};

//part.4
var triangleInput = prompt("triangle input");
var triangleNo = Number(prompt("triangle no"));
var triangleCount;
do{
    console.log(triangleInput);
    triangleCount++
}while(triangleCount < triangleNo){
    triangleInput + triangleInput;
    console.log(triangleInput);
}