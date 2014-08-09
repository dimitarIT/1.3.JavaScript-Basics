function findNthDigit(input) {
    "use strict";
    var num = input[1].toString().replace('.','').replace('-','');
    var result;
    if (num.length < input[0]) {
        result = "The number doesn't have " + input[0] + " digits";
    }
    num = Number(num);
    for (var i = 0; i < input[0] - 1; i++) {
        num = Math.floor(num / 10);

    }
    result = num % 10;
    console.log(result);
}
findNthDigit([1, 6]);
findNthDigit([2, -55]);
findNthDigit([6, 923456]);
findNthDigit([3, 1451.78]);
findNthDigit([6, 888.88]);