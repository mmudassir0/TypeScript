const getName = (name: string): string => name;
console.log(getName("mudassir"));

const MultipleType = (name: string, age: number, bol: boolean): string => {
  return `my name is ${name} and i am ${age} year old. This is ${bol}`;
};
console.log(MultipleType("mudassir", 25, true));
//anonymous function
const pets = ["dog", "cat", "sparrow", "cow", "donkey", 1];
pets.map((pet) => console.log(pet));

//void
const printName = (name: string): void => {
  console.log(name);
};
printName("ali");
//never
const loopRun = (): never => {
  while (true) {
    console.log("mudassir");
  }
};
// loopRun();

//leap year
const checkLeapYear = (year: number) => {
  if (year % 400 == 0) {
    return true;
  } else if (year % 100 == 0) {
    return false;
  } else if (year % 4 == 0) {
    return true;
  } else {
    return false;
  }
};
console.log(checkLeapYear(1900));
