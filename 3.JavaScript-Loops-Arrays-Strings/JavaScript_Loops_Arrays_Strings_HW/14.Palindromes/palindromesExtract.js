function findPalindromes(input) {
    "use strict";
    var result = [];
    var words = input.toLowerCase().match(/\w+/g);
    var currentWord;
    var isPalindrome;

    for (var i = 0; i < words.length; i++) {
        currentWord = words[i];
        isPalindrome = true;
        for (var z = 0; z < currentWord.length; z++ ) {
            if (currentWord[z] !== currentWord[currentWord.length - 1 - z]) {
                isPalindrome = false;
            }
        }
        if (isPalindrome) {
            result.push(currentWord);
        }
    }
    console.log(result);
}
findPalindromes('There is a man, his name was Bob.');