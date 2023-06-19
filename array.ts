const names: string[] = ["ali", "humza"];
//OR
const names1: Array<string> = ["ali", "humza"];

names.push("ahmad");
console.log(names);

const num1: number[] = [1, 2, 3];
console.log(num1);
//mix type array
const mix: (string | number)[] = ["ali", "humza", 1, 2, 3];

//multidimentional array
const multiDimension: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
//examples
type product = { name: string; price: number };
const Product: product[] = [{ name: "ali", price: 12 }];
console.log(Product);

const getTotal = (products: product[]) => {
  products.push({ name: "ahmad", price: 10 });
  products.push({ name: "ahmad", price: 20 });
  let sum = 0;
  products.map((item) => {
    sum = sum + item.price;
  });
  return sum;
};
console.log(getTotal([{ name: "ali", price: 2 }]));
