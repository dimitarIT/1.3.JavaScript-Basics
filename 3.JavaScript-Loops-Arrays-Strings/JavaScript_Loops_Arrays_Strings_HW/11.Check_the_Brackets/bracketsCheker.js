function checkBrackets(input) {
    "use strict";
    var leftBrackets = 0;
    var rightBrackets = 0;

    for (var i = 0; i < input.length; i++) {
        if (input[i] === '(') {
            leftBrackets++;
        }
        else if (input[i] === ')') {
            rightBrackets++;
        }
    }

    if (rightBrackets === leftBrackets ) {
        console.log("correct");
        return "correct";
    }else {
        console.log("incorrect");
        return "incorrect";
    }
}
checkBrackets('( ( a + b ) / 5 – d )');
checkBrackets(') ( a + b ) )');
checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )');
console.log();


function checkBracketsCleverWay(input) {
    "use strict";
    var brackets = 0;

    for (var i = 0; i < input.length; i++) {
        if (input[i] ===  ')') {
            brackets++;
        }
        else if (input[i] === '(') {
            brackets--;
        }
    }
    console.log(brackets === 0 ? "correct" : "incorrect");
}

checkBracketsCleverWay('( ( a + b ) / 5 – d )');
checkBracketsCleverWay(') ( a + b ) )');
checkBracketsCleverWay('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )');