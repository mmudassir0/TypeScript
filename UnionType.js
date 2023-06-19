var number = 10;
number = "8";
var cal = { a: 1, b: 2 };
cal = { x: 10, y: 20 };
// ----------------function union
function price(total, tax) {
    if (typeof total === "number") {
        total = total * tax;
        return total;
    }
    else {
        return total;
    }
}
// ----------------------------union in array
var arr = [1, 2, "3"];
//literal type
var a;
a = "b";
//problems
// 1
var highestScore = 1;
// 2
var stuff = [1, 2, 3];
var myName = "sudheer";
myName = ["123"];
// 3
var SkillLevel;
var colorArray = [
    { r: 1, g: 2, b: 3 },
    { h: 5, s: 1, l: 1 },
];
// 6
var greet = function (name) {
    if (typeof name === "string") {
        return "Hello " + name;
    }
    else {
        return name.map(function (name) { return "Hello ".concat(name); });
    }
};
console.log(greet(["ali", "ahmad", "ayan"]));
