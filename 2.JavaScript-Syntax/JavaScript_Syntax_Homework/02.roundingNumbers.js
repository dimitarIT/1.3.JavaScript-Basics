function roundNumber(floatingPointNum) {
    "use strict";
    var floor = Math.floor(floatingPointNum);
    var round = Math.round(floatingPointNum);
    var result = floor + "\n" + round;
    return result;

}

console.log(roundNumber(22.7));
console.log(roundNumber(12.3));
console.log(roundNumber(58.7));