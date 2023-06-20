var names = ["ali", "humza"];
//OR
var names1 = ["ali", "humza"];
names.push("ahmad");
console.log(names);
var num1 = [1, 2, 3];
console.log(num1);
//mix type array
var mix = ["ali", "humza", 1, 2, 3];
//multidimentional array
var multiDimension = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
var Product = [{ name: "ali", price: 12 }];
console.log(Product);
var getTotal = function (products) {
    products.push({ name: "ahmad", price: 10 });
    products.push({ name: "ahmad", price: 20 });
    var sum = 0;
    products.map(function (item) {
        sum = sum + item.price;
    });
    return sum;
};
console.log(getTotal([{ name: "ali", price: 2 }]));
//# sourceMappingURL=array.js.map