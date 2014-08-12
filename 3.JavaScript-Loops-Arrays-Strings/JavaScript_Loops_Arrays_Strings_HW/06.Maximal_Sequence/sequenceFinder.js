function findMaxSequence(input) {
    "use strict";
    var result = [];
    var temp = [];

    for (var i = 0; i < input.length; i++) {
        temp.push(input[i]);
        if (input[i] !== input[i + 1]) {
            if (temp.length >= result.length ) {
                result = temp;
            }
            temp = [];
        }
    }
    console.log(result);
}

findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
findMaxSequence(['happy']);
findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']);
findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]);