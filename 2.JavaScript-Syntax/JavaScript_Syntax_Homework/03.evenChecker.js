function evevNumber(number) {
    "use strict";

    if (number % 2 === 0) {
        return true;
    }else {
        return false;
    }

}

console.log(evevNumber(3));
console.log(evevNumber(127));
console.log(evevNumber(588));