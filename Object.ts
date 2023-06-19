const dispalyName = (person: { first: string; last: string }): void => {
  console.log(`${person.first} ${person.last}`);
};
dispalyName({ first: "mudassir", last: "abbas" });
//--------
const obj: { a: number; b: number } = {
  a: 10,
  b: 5,
};
console.log(obj.a + obj.b);
//--------------
//type alias
type person = {
  name: string;
  age: number;
};
const general = (person: person) => {
  return `${person.name} ${person.age}`;
};
const gen = general({ name: "mudassir", age: 10 });
console.log(gen);

//nested object
type Details = {
  name: string;
  age: number;
  parentName: {
    mom: string;
    dad: string;
  };
};
function personDetails(detail: Details) {
  return `${detail.name} ${detail.age} ${detail.parentName.dad} ${detail.parentName.mom}`;
}
const detail = {
  name: "hussan",
  age: 112,
  parentName: {
    mom: "fatima",
    dad: "ali",
  },
};
console.log(personDetails(detail));
//----------------
//optional parameter type
type point = {
  x: number;
  y: number;
  z?: number; //this is optional
};
const pointNum: point = {
  x: 10,
  y: 19,
};

//readonly
type User = {
  readonly id: number;
};
const user: User = {
  id: 10,
};
// user.id=20       //it give error

//intersection type or merge type
type circle = {
  radius: number;
};
type color = {
  color: string;
};
type colorCircle = circle & color;

const colorCircle1: colorCircle = {
  radius: 10,
  color: "red",
};
