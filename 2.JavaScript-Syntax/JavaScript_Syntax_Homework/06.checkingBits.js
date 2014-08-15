function bitChecker(num) {
    "use strict";

    var numToBits = num.toString(2);
    var position = 3;
    var bitsShiftPosition = numToBits >> position;
    var bit = bitsShiftPosition & 1;

    if (bit === 1) {
        return true;
    } else {
        return false;
    }
}
console.log(bitChecker(333));
console.log(bitChecker(425));
console.log(bitChecker(2567564754));
