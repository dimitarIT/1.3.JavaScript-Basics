function replaceATag(input) {
    "use strict";

    var result = input.replace("<a", "[URL").replace("</a>", "[/URL]");

    var index = result.indexOf(">", result.indexOf("[URL"));

    result = result.substring(0, index) + "]" + result.substring(index + 1);
    return result;
}
console.log(replaceATag("<ul><li><a href='http://softuni.bg'>SoftUni</a></li></ul>"));