function calcSupply(num) {
    "use strict";

    var life = input[1] - input[0];
    var result = Math.round((input[2] * 365) * life);

    var outputChocolate = result + "kg of chocolate would be enough until I am " + input[1] + " years old.";
    var outputFruits = result + "kg of fruits would be enough until I am " + input[1] + " years old.";
    var outputNuts = result + "kg of nuts would be enough until I am " + input[1] + " years old.";

    for (var i = 0; i < 3; i++) {
        if (i === 0) {
            return outputChocolate;
        }
        if (i === 1) {
            return outputFruits;
        }
        if (i === 2) {
            return outputNuts;
        }
    }
}

var input = [38, 118, 0.5];
console.log(calcSupply(input));

var input = [20, 87, 2];
console.log(calcSupply(input));

var input = [16, 102, 1.1];
console.log(calcSupply(input));
