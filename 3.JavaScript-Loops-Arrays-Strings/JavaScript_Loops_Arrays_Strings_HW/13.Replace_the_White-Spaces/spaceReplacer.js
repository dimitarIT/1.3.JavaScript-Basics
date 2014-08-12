function replaceSpaces(input) {
    "use strict";
    var result = input.split(' ').join('&nbsp;');
    console.log(result);
}

replaceSpaces("But you were living in another world tryin' to get your message through");