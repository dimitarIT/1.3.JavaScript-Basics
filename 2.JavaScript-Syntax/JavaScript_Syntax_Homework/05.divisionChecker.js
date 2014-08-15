function divisionBy3(num) {
    "use strict";
    /*
     EASY WAY - FIRST WAY
     if (num % 3 === 0) {
     return "the number is divided by 3 without remainder";
     } else {
     return "the number is not divided by 3 without remainder";
     }
     */

    // SECOND WAY
    var numStr = num.toString().split('');
    var result = 0;

    for (var i = 0; i < numStr.length; i++) {
        result += parseInt(numStr[i]);
    }

    if (result % 3 === 0) {
        return "the number is divided by 3 without remainder";
    } else {
        return "the number is not divided by 3 without remainder";
    }

}

console.log(divisionBy3(12));
console.log(divisionBy3(188));
console.log(divisionBy3(591));
