// export {} from "typescript";
//string
let name1 = "mudassir";
//number
let num = 1;
//boolean
let bol = true;
//function
let first = (name = "name") => {
  console.log(name);
};
first();

console.log("hello", name1, num, bol);
// -----
const data = (name) => {
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
function getNum(): number | boolean {
  return 123 && true;
}
console.log(getNum());
