function reverseString(input) {
    "use strict";
    var result = input.split("").reverse().join(""); //return input.split("").reverse().join(""); - doesn't work
    console.log(result);
    return result;
}

reverseString('sample');
reverseString('softUni');
reverseString('java script');
