// export {} from "typescript";
//string
var name1 = "mudassir";
//number
var num = 1;
//boolean
var bol = true;
//function
var first = function (name) {
    if (name === void 0) { name = "name"; }
    console.log(name);
};
first();
console.log("hello", name1, num, bol);
// -----
var data = function (name) {
    return "hello " + name;
};
console.log(data("mudassir"));
// -----------
// function checkDate(date: Date) {
//   return date.toDateString();
// }
// let date = checkDate(new Date());
// console.log(date);
// ------
function getNum() {
    return 123 && true;
}
console.log(getNum());
//# sourceMappingURL=basic.js.map