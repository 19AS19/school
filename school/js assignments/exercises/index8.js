/* part.1
console.log(prompt("length of string").length);
*/ 

/* part.2
var num = prompt("first and last of number");
var numOut = (`${num[0]}, ${num[num.length-1]}`);
console.log(numOut);
*/

/* part.3
var nums = prompt("number to words");
var words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
var superOut = "";
nums.split("").forEach((c) => {
    superOut += " "+words[+c]
})
console.log(superOut)
*/
prompt("rnadom")
//part.4
num1 = Number(prompt("num1")), num2 = Number(prompt("num2"));
min = Math.min(num1, num2), max = Math.max(num1, num2);
while(max%min!=0){
    max += num2
}if(max%min==0){
    console.log(max)}


