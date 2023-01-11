//part.1
const sum = (n1,n2) => n1+n2

//part.2
function operation(n1,n2,operator) {
    switch(operator) {
        case '*': 
            return n1*n2;
            break;
        case '/':
            return n1/n2;
            break;
        case '+':
            return n1+n2
            break;
        case '-':
            return n1-n2;
            break;
        default:
            return null
            break;
    }
}

//part.3
const palindrome = s => s == s.split('').reverse().join('');

//part.4
const vowelCount = s => s.toLowerCase().replace(/[^aeiou]/gm, '').length

//part.5
const upperCount = s => s.replace(/[a-z]/gm, '').length

//part.6
const numCount = s => s.replace(/[^0123456789]/gm, '').length

//part.7
const meanofArray = arr => arr.reduce((a,b) => a+b) / arr.length

//part.8
function modeofArray(arr) {
    var mode = 0
        
    for(i=0;i<=arr.length;i++) {
        if(getOccurrence(arr, arr[i] > mode)){
            mode = getOccurrence(arr, arr[i])
        }
    }

    function getOccurrence(array, value) {
        return array.filter((v) => (v === value)).length;
    }

    return mode
}

//part.9
