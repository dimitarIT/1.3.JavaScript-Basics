function findYoungestPerson(persons) {
    "use strict";
    // Easy WAY
    persons.sort(function (firstPerson, secondPerson) {
        return firstPerson.age - secondPerson.age;
    });

    console.log('The youngest person is %s %s',
                persons[0].firstname, persons[0].lastname);


    // Second WAY
    var minAge = Number.MAX_VALUE;
    for (var i = 0; i < persons.length; i++) {
        if (persons[i].age < minAge) {
            var result = persons[i];
            minAge = persons[i].age;
        }
    }
    if (result) {
        console.log('The youngest person is %s %s', result.firstname, result.lastname);
    } else {
        console.log('Age property is missing');
    }
}

var persons = [
    { firstname: 'George', lastname: 'Kolev', age: 32},
    { firstname: 'Bay', lastname: 'Ivan', age: 81},
    { firstname: 'Baba', lastname: 'Ginka', age: 40}
];

findYoungestPerson(persons);