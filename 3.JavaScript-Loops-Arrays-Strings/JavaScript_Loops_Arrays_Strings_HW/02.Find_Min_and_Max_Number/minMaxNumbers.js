function findMinAndMax(input) {
    "use strict";

    // First Way
    var min = Math.min.apply(null, input);
    var max = Math.max.apply(null, input);

    var result = "Min : " + min + "\nMax : " + max;
    console.log(result);
    console.log();

    // Second Way
    var minValue = Number.MAX_VALUE;
    var maxValue = Number.MIN_VALUE;

    for (var i = 0; i < input.length; i++) {

        var currentNum = input[i];
        if (currentNum > maxValue) {
            maxValue = currentNum;
        }
        else if (currentNum < minValue) {
            minValue = currentNum;
        }
    }
    var minMax =
        "Min : " + minValue +
        "\nMax : " + maxValue;

    console.log(minMax);
    console.log();


    //Third Way Whit Object
    var obj = { Min: minValue, max: maxValue};
    console.log(obj);
    console.log();


    //Forth Way Whit Sorting - I now for last result!
    var sortInput = [input.sort()];
    var valueMin = input[0];
    var valueMax = input.length - 1;

    console.log("Min : " + valueMin + "\nMax : " + maxValue);
    console.log();
}

findMinAndMax([1, 2, 1, 15, 20, 5, 7, 31]);
findMinAndMax([2, 2, 2, 2, 2]);
findMinAndMax([500, 1, -23, 0, -300, 28, 35, 12]);



















































