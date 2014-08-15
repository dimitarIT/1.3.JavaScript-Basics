"use strict";
function checkDigit(input) {
    "use strict";

    //FIRST WAY
    var numStr = (input.toString().split("")).reverse();
    var checker = '3';
    var result = numStr[2] === checker;

    return result;
}

function checkDigitSecondWay(input) {
    return Math.floor(input/100) % 10 === 3;
}

console.log(checkDigit(1235));
console.log(checkDigit(25368));
console.log(checkDigit(123456) + "\n");

console.log(checkDigitSecondWay(1235));
console.log(checkDigitSecondWay(25368));
console.log(checkDigitSecondWay(123456));