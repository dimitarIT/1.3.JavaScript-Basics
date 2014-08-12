function findMostFreqNum(input) {
    "use strict";
    var counter = 0;
    var maxCount = 0;
    var result = 0;

    for (var i = 0; i < input.length; i++) {
        counter = 1;
        for (var z = 0; z < input.length; z++) {
            if (z !== i && input[i] === input[z]) {
                counter++;
            }
            if (counter > maxCount) {
                maxCount = counter;
                result = input[i];
            }
        }
    }
    console.log("%s (%s times)", result, maxCount);
}

findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);
findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]);
findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);

