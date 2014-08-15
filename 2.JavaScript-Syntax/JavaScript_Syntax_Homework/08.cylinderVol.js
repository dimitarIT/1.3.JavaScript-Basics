"use strict";
function cylinderVol(params) {
    "use strict";

    var result = (params[1] * Math.PI * Math.pow(params[0], 2)).toFixed(3);
    return result;
}

var input = [2, 4];
console.log(cylinderVol(input));
var input = [5, 8];
console.log(cylinderVol(input));
var input = [12, 3];
console.log(cylinderVol(input));
