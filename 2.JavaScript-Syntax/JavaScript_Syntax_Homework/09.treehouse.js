"use strict";
function treeHouseCompare(ab) {
    "use strict";

    var a = ab[0];
    var b = ab[1];

    var areaTriangle = (a * (a * 2 / 3)) / 2;
    var areaSquare = a * a;
    var areaHouse = areaSquare + areaTriangle;

    var areaRectangle = b * (b / 3);
    var areaCircle = Math.PI * (b * 2 / 3) * (b * 2 / 3);
    var treeTreeHouse = areaRectangle + areaCircle;

    if (areaHouse > treeTreeHouse) {
        return "house/" + areaHouse.toFixed(2);
    } else {
        return "tree/" + treeTreeHouse.toFixed(2);
    }
}

var input = [3, 2];
console.log(treeHouseCompare(input));
var input = [3, 3];
console.log(treeHouseCompare(input));
var input = [4, 5];
console.log(treeHouseCompare(input));