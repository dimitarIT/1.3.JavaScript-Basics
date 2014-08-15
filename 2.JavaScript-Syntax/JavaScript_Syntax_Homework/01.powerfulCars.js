"use strict";

function convertKWtoHP(kW) {
    return kW * 1.34102;
}

console.log(convertKWtoHP(75).toFixed(2));
console.log(convertKWtoHP(150).toFixed(2));
console.log(convertKWtoHP(1000).toFixed(2));