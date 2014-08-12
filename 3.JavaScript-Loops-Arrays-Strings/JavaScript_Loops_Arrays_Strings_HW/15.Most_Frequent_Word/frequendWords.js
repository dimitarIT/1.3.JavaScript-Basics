function findMostFreqWord(input) {
    "use strict";
    var words = input.toLowerCase().match(/\w+/g);
    //console.log(words); words
    var maxCounter = 0;
    var counter;
    var result = [];

    for (var i = 0; i < words.length; i++) {
        counter = 1;
        for (var j = 0; j < words.length; j++) {
            if (j !== i && words[i] === words[j]) {
                counter++;
            }
        }
        if (counter > maxCounter) {
            maxCounter = counter;
            result = [words[i]];

        } else if (counter === maxCounter && result.indexOf(words[i]) < 0) { //WHY
            result.push(words[i]);

        }
    }

    result.sort();
    for (var z = 0; z < result.length; z++) {
        console.log("%s -> %s times", result[z], maxCounter);
    }
}
findMostFreqWord('in the middle of the night');
console.log();
findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.');
console.log();
findMostFreqWord('Hello my friend, hello my darling. Come on, come here. ' +
    'Welcome, welcome darling.');