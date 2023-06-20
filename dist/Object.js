var dispalyName = function (person) {
    console.log("".concat(person.first, " ").concat(person.last));
};
dispalyName({ first: "mudassir", last: "abbas" });
//--------
var obj = {
    a: 10,
    b: 5,
};
console.log(obj.a + obj.b);
var general = function (person) {
    return "".concat(person.name, " ").concat(person.age);
};
var gen = general({ name: "mudassir", age: 10 });
console.log(gen);
function personDetails(detail) {
    return "".concat(detail.name, " ").concat(detail.age, " ").concat(detail.parentName.dad, " ").concat(detail.parentName.mom);
}
var detail = {
    name: "hussan",
    age: 112,
    parentName: {
        mom: "fatima",
        dad: "ali",
    },
};
console.log(personDetails(detail));
var pointNum = {
    x: 10,
    y: 19,
};
var user = {
    id: 10,
};
var colorCircle1 = {
    radius: 10,
    color: "red",
};
//# sourceMappingURL=Object.js.map