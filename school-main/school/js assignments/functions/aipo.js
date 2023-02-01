function myFunction(array) {
    x = [];
    array.forEach(c => x.push(c.replace(/[.,\/<>#!$%\^&\*;:{}=\-_`~()]/gm, '')));
    longest = '';
    for(i=0;i<=x.length;i++) {
        if(x[i].length == longest.length) {continue}
        else if(x[i].length > longest.length) {longest = x[i]}
    }
    return x
}