function extractContent (arr) {
    "use strict";
    var result = '';
    var content = true;

    for (var i =0; i < arr.length; i++ ) {
        if (arr[i] === "<") {
            content = false;
        } else if (arr[i] === ">") {
            content = true;
        }else if (content) {
            result += arr[i];
        }
    }
    return result;
}

console.log(extractContent("<p>Hello</p><a href='http://w3c.org'>W3C</a>"));
console.log(extractContent("<ul><li><a href='http://softuni.bg'>SoftUni</a></li></ul>"));