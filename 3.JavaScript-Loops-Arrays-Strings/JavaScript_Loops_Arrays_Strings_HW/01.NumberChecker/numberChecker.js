function printNumber(n) {
    "use strict";

    var result = [];

    for (var i = 1; i <= n; i++) {
        if (i % 4 !== 0 && i % 5 !== 0) {
            result.push(i);
        }
    }

    var output = result.length !== 0 ? result.join(",") : "no";
    return output;
}

console.log(printNumber(20));
console.log(printNumber(-5));
console.log(printNumber(13));