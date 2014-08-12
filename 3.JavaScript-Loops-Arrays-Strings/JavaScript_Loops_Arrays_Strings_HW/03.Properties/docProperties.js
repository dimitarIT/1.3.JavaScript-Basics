function displayProperties(input) {
    "use strict";

    var result = [];
    for (var property in input) {
        result.push(property);
    }

    result.sort();
    return result;
}
//Look at the Console in browser
console.log(displayProperties(document).join("\n"));
