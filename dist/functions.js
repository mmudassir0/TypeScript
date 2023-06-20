var getName = function (name) { return name; };
console.log(getName("mudassir"));
var MultipleType = function (name, age, bol) {
    return "my name is ".concat(name, " and i am ").concat(age, " year old. This is ").concat(bol);
};
console.log(MultipleType("mudassir", 25, true));
//anonymous function
var pets = ["dog", "cat", "sparrow", "cow", "donkey", 1];
pets.map(function (pet) { return console.log(pet); });
//void
var printName = function (name) {
    console.log(name);
};
printName("ali");
//never
var loopRun = function () {
    while (true) {
        console.log("mudassir");
    }
};
// loopRun();
//leap year
var checkLeapYear = function (year) {
    if (year % 400 == 0) {
        return true;
    }
    else if (year % 100 == 0) {
        return false;
    }
    else if (year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
};
console.log(checkLeapYear(1900));
//# sourceMappingURL=functions.js.map