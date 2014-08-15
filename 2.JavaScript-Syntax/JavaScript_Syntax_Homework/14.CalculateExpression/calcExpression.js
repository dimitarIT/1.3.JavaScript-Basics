function calculate () {
    "use strict";

    var regex = /^[0-9 \-+/*.()]+$/;
    var expresion = document.getElementById("input").value; //LOOK
    var validation = regex.test(expresion);

    if (validation) {
        var result = eval(expresion);
        document.getElementById("result").innerHTML = result;
    } else {
        result = "Invalid Input";
        document.getElementById("result").innerHTML = result;
    }
}