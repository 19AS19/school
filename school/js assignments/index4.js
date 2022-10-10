// part.1

let userInput = prompt("rock, paper or scissors?");
let x = Math.floor(Math.random() *3)+1; 
switch(x){
    case 1:
        compChoice = "rock"
        break;
    case 2:
        compChoice = "paper"
        break;
    case 3:
        compChoice = "scissors"
        break;
}
if((compChoice)==(userInput)){
    console.log((compChoice)+" draws with "+(userInput));
}else if((compChoice == "rock") && (userInput == "scissors")){
    console.log((compChoice)+" beats "+(userInput)+", you lose")
}else if((compChoice == "scissors") && (userInput == "paper")){
    console.log((compChoice)+" beats "+(userInput)+", you lose")
}else if((compChoice == "paper") && (userInput == "rock")){
    console.log((compChoice)+" beats "+(userInput)+", you lose")
}else if((compChoice == "paper") && (userInput == "scissors")){
    console.log((userInput)+" beats "+(compChoice)+", you win")
}else if((compChoice == "rock") && (userInput == "paper")){
    console.log((userInput)+" beats "+(compChoice)+", you win")
}else if((compChoice == "scissors") && (userInput == "rock")){
    console.log((userInput)+" beats "+(compChoice)+", you win")
}else{
    console.log("Input error.")
}

// part.2

let levelInput=prompt("level? (higher or ordinary)");
let gradeInput=prompt("grade? (h1-o2 etc.)")
let grade
if(levelInput=="higher"){
    switch(gradeInput){
        case "h1":
            grade = 100
            break;
        case "h2":
            grade = 88
            break;
        case "h3":
            grade = 77
            break;
        case "h4":
            grade = 66
            break;
        case "h5":
            grade = 56
            break;
        case "h6":
            grade = 46
            break;
        case "h7":
            grade = 37
            break;
        case "h8":
            grade = 0
            break;
    }
}else{
    switch(gradeInput){
        case "o1":
            grade = 56
            break;
        case "o2":
            grade = 46
            break;
        case "o3":
            grade = 37
            break;
        case "o4":
            console.log("debug")
            grade = 28
            break;
        case "o5":
            grade = 20
            break;
        case "o6":
            grade = 12
            break;
        case "o7":
            grade = 0
            break;
        case "o8":
            grade = 0
            break;
    }
}
console.log("your grade is: "+(grade));