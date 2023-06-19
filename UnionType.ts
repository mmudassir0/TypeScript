let number: number | string = 10;
number = "8";
type one = {
  x: number;
  y: number;
};
type two = {
  a: number;
  b: number;
};
let cal: one | two = { a: 1, b: 2 };
cal = { x: 10, y: 20 };
// ----------------function union
function price(total: number | string, tax: number) {
  if (typeof total === "number") {
    total = total * tax;
    return total;
  } else {
    return total;
  }
}
// ----------------------------union in array
let arr: (number | string)[] = [1, 2, "3"];
//literal type

let a: "a" | "b" | "c";
a = "b";
//problems
// 1
const highestScore: number | string = 1;
// 2
const stuff: number[] | string[] = [1, 2, 3];

let myName: string | string[] = "sudheer";
myName = ["123"];
// 3
type SkillLevel = "begineer" | "intermediate" | "advance" | "expert";
// SkillLevel = "advance";
//4
type SchoolStudent = {
  name: string;
  age: number;
  sport: "ski" | "snowboard";
  level: SkillLevel;
};
// 5
type rgbColor = {
  r: number;
  g: number;
  b: number;
};
type hslColor = {
  h: number;
  s: number;
  l: number;
};
const colorArray: (rgbColor | hslColor)[] = [
  { r: 1, g: 2, b: 3 },
  { h: 5, s: 1, l: 1 },
];
// 6
const greet = (name: string | string[]) => {
  if (typeof name === "string") {
    return "Hello " + name;
  } else {
    return name.map((name) => `Hello ${name}`);
  }
};
console.log(greet(["ali", "ahmad", "ayan"]));
