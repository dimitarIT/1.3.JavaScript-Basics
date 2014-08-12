function sortArray(input) {
    "use strict";
    var result = [];

    for (var i = 0; i < input.length; i++) {
       var min = Math.min.apply(Math, input);
        result.push(min);
        input[input.indexOf(min)] = Number.MAX_VALUE;
    }

    console.log(result);
    return result;

    //EASY WAY
//    function orderBy(a, b) {
//        return a - b;
//    }
//
//    input.sort(orderBy);
//    console.log(input);
//    return input;
}

sortArray([5, 4, 3, 2, 1]);
sortArray([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]);
console.log();

function sortArraySecond(input){
    "use strict";
    var min;

    for (var i = 0; i < input.length; i++ ) {
        min = i;
        for (var j = 0 + 1; j < input.length; j++) {
            if (input[j] < input[min]) {
                min = j;
            }
        }
        if (i != min){
            swap(input, i, min);
        }
    }

    console.log(input);
}

function swap(input, firstIndex, secondIndex) {
    var temp = input[firstIndex];
    input[firstIndex] = input[secondIndex];
    input[secondIndex] = temp;
}
sortArraySecond([5, 4, 3, 2, 1]);
sortArraySecond([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]);
console.log();