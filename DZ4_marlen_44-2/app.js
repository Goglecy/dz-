function multiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} × ${i} = ${number * i}`);
    }
}

multiplicationTable(5);




function isPalindrome(str) {
    str = str.replace(/\s+/g, '').toLowerCase();

    let reversedStr = str.split('').reverse().join('');

    return str === reversedStr;
}

