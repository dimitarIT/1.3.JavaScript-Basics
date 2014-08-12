function findMaxSequence(input) {
    "use strict";
    var result = [];
    var temp = []; // or var temp = [input[0]];

    for (var i = 0; i < input.length; i++) {

        if (input[i] > input[i - 1]) {
            temp.push(input[i]);
            if (temp.length >= result.length ) {
                result = temp;
            }
        }else {
            temp = [input[i]];
        }
    }

    console.log(result.length !== 0 ? result : "no");
    return result.length !== 0 ? result : "no";
}

findMaxSequence([3, 2, 3, 4, 2, 2, 4]);
findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]);
findMaxSequence([3, 2, 1]);
