"use strict";
function variablesTypes(input) {
    "use strict";

    console.log(
            "My name: %s //type is %s " +
            "\nMy age: %s //type is %s " +
            "\nI am male: %s //type is %s " +
            "\nMy favorite foods are: %s //type is %s ",
        input[0], typeof input[0],
        input[1], typeof input[1],
        input[2], typeof input[2],
        input[3].toString(), typeof (input[3])
    );
}

variablesTypes(['Pesho', 22, true, ['fries', 'banana', 'cake']]);

//"My name: Pesho //type is string
//My age: 22 //type is number
//I am male: true //type is boolean
//My favorite foods are: fries,banana,cake //type is object"
