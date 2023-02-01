//part.1
function superFunction() {
    let letterInput = document.getElementById("letter").value;
    let length = letterInput.length;
    if(letterInput === ""){
        alert("invalid letter");
    }else if("aeiou".includes(letterInput)){
        alert("your letter is a vowel");
    }else if("bcdfghjklmnpqrstvwxyz".includes(letterInput)){
        alert("your letter is a consonant");
    }else if(length>= 1){
        alert("your input is more than one character");
    }else{
        alert("your letter is not a letter");
    }
}

//part.2
function superFunction2() {
    let numberInput = document.getElementById("number").value;
    if(numberInput === "" || "abcdefghijklmnopqrstuvwxyz!'$%^&*()_-+=[{]}#~'@;:.>,</?"){
        alert("invalid number");
    }else if(numberInput/11%5 == 0){
        alert("your number is divisible by 11 and 5 without a remainder");
    }else if(numberInput/11%5 != 0){
        alert("your number is not divisible by 11 and 5 without a remainder");
    }
}


//part.3
function superFunction3() {
    let monthInput = document.getElementById("month").value;
    let daysInMonth
    let febLeap
    switch(monthInput){
        case "january":
            daysInMonth = 31;
            break;
        case "february":
            let febLeap = prompt("is your year a leap year?").toLowerCase();
            if(febLeap == "yes"){
                daysInMonth = 29;
                break;
            }else if(febLeap == "no"){
                daysInMonth = 28;
                break;
            }else{
                alert("invalid");
            }
            break;
        case "march":
            daysInMonth = 31;
            break;
        case "april":
            daysInMonth = 30;
            break;
        case "may":
            daysInMonth = 31;
            break;
        case "june":
            daysInMonth = 30;
            break;
        case "july":
            daysInMonth = 31;
            break;
        case "august":
            daysInMonth = 31;
            break;
        case "september":
            daysInMonth = 30;
            break;
        case "october":
            daysInMonth = 31;
            break;
        case "november":
            daysInMonth = 30;
            break;
        case "december":
            daysInMonth = 31;
            break;
    }if(["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"].indexOf(monthInput)){
        alert(monthInput+" has "+daysInMonth+" days.");
    }else{
        alert("invalid month");
    }    
}

//part.4
function superFunction4() {
    let timeInput = document.getElementById("time").value;
    const timeArray= timeInput.split(":");
    let timeComp = timeArray[0];
    if(timeComp === ""){
        alert("invalid time")
    }else if(timeComp<=11 && timeComp>=0){
        alert((timeInput)+ " is am.");
    }else if(timeComp>=12 && timeComp<= 23){
        alert((timeInput)+ " is pm");
    }
}