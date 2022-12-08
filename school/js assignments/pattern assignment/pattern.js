function pattern1(num) {
    str = '';
    for (i = 1; i <= num; i++) {
        str += i;
        console.log(str);
    }
    arr = Array.from(str);
    for (i = num; i > 1; i--) {
        arr.pop();
        console.log(arr.join(''));
    }
}

function pattern2(num) {
    console.log('*');
    str = '';
    for (i = 1; i <= num; i++) {
        str += i;
        var x = Array.from(str); x.pop(); x.reverse();
        console.log(`*${str}${x.join('')}*`);

    }
    arr = Array.from(str);
    for (i = num; i > 1; i--) {
        arr.pop(); str = arr.join('');
        var x = Array.from(str); x.pop(); x.reverse();
        console.log(`*${str}${x.join('')}*`);
    }
    console.log('*');
}

function pattern3(num) {
    str = '';
    for (i = 1; i <= num; i++) {
        var x = ' '.repeat(num - i);
        var y = ' '.repeat(i - 1);
        if (i == num) { console.log(`${y}${i}`) } else { console.log(`${y}${i}${x}${x}${i}`) };
    } for (i = num - 1; i >= 1; i--) {
        var x = ' '.repeat(num - i);
        var y = ' '.repeat(i - 1);
        console.log(`${y}${i}${x}${x}${i}`);
    }
}