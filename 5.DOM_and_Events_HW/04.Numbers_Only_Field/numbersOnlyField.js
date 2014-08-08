var input = document.getElementById('input');
var inputText = '';
input.oninput = function () {
    "use strict";
    if (isNaN(input.value)) {
        input.value = inputText;
        input.style.background = 'red';
        setTimeout(function () {
            input.style.background = 'white';
        }, 800);
    } else {
        inputText = input.value;
    }
};