"use strict";

function soothsayer(years, languages, cities, cars) {
    "use strict";

    var sooth =
        "You will work " + years[Math.floor(Math.random() * years.length)] +
        " years on " + languages[Math.floor(Math.random() * languages.length)] +
        "\nYou will live in " + cities[Math.floor(Math.random() * cities.length)] +
        " drive car " + cars[Math.floor(Math.random() * cities.length)];

    return sooth;
}
console.log(soothsayer([3, 5, 2, 7, 9],
    ["Java", "Python", "C#", "JavaScript", "Ruby"],
    ["Silicon Valley", "London", "Las Vegas", "Paris", "Sofia"],
    ["BMW", "Audi", "Lada", "Skoda", "Opel"]));