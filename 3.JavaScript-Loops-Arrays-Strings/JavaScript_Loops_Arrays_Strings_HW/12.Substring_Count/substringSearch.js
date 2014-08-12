function countSubstringOccur(input) {
    "use strict";
    var substring = input[0].toLowerCase();
    var text = input[1].toLowerCase();
    var result = 0;
    var index = 0;

    while (text.indexOf(substring, index) != -1) {
        result++;
        index = text.indexOf(substring, index) + 1;
    }

    console.log(result);
    return result;
}
countSubstringOccur(
    ["in", "We are living in a yellow submarine. " +
        "We don't have anything else. " +
        "Inside the submarine is very tight. " +
        "So we are drinking all the day. We will move out of it in 5 days."]);

countSubstringOccur(
    ["your", "No one heard a single word you said. " +
        "They should have seen it in your eyes. " +
        "What was going around your head."]);

countSubstringOccur(
    ["but", "But you were living in another " +
        "world tryin' to get your message through."]);
console.log();


// Second Way
function countSubstring(input) {
    "use strict";
    var substring = input[0].toLowerCase();
    var text = input[1].toLowerCase();
    var counter = 0;

    for (var i = 0; i < text.length - substring.length; i += 1) {
        for (var j = 0; j < substring.length; j += 1) {
            if (substring[j] !== text[i + j]) {
                break;
            }
            if (j === substring.length - 1 && substring[j] === text[i + j]) {
                counter++;
            }
        }
    }
    console.log(counter);
}
countSubstring(
    ["in", "We are living in a yellow submarine. " +
        "We don't have anything else. " +
        "Inside the submarine is very tight. " +
        "So we are drinking all the day. We will move out of it in 5 days."]);

countSubstring(
    ["your", "No one heard a single word you said. " +
        "They should have seen it in your eyes. " +
        "What was going around your head."]);

countSubstring(
    ["but", "But you were living in another " +
        "world tryin' to get your message through."]);
console.log();