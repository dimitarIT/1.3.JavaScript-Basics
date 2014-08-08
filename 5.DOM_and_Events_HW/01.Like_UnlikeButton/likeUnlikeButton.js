var button = document.getElementById('like-button');
var like = false;
button.onclick = function () {
    "use strict";
    if (like) {
        button.innerText = 'Like';
    } else {
        button.innerText = 'Unlike';
    }
    like = !like;
};