function compareChars() { //For Second and Third Way - must put firstArray and secondArray
    "use strict";

    //Easy Way
    var charrArray1 = arguments[0].toString();
    var charrArray2 = arguments[1].toString();
    if (charrArray1 === charrArray2) {
        console.log("Equal");
    } else {
        console.log("Not Equal");
    }

//    //First Way Is Not Good
//    var result = true;
//    for (var i = 0; i < firstArray.length; i++) {
//        for (var y = 0; y < secondArray.length; y++) {
//            var firstChar = firstArray[i];
//            var secondChar = secondArray[i];
//
//            if (firstChar !== secondChar) {
//                result = false;
//            }
//        }
//    }
//    if (result) {
//        console.log("Equal");
//    } else {
//        console.log("Not Equal");
//    }
//    console.log();


//    //Second Way It is GOOD
//    var flag = true;
//    var maxLength = Math.max(firstArray.length, secondArray.length);
//    for (var z = 0; z < maxLength; z++) {
//        if (firstArray[z] !== secondArray[z]) {
//            flag = false;
//        }
//    }
//    if (flag) {
//        console.log("Equal");
//    } else {
//        console.log("Not Equal");
//    }
//    console.log();
}

compareChars(['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'], ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']);

compareChars(['3', '5', 'g', 'd'], ['5', '3', 'g', 'd']);

compareChars(['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'], ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']);