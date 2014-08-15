function isPrime(number) {
    "use strict";
    var start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start < 1) {
            return false;
        } else {
            return number > 1;
        }
    }
}

console.log(isPrime(7));
console.log(isPrime(254));
console.log(isPrime(587));
console.log(isPrime(6598));