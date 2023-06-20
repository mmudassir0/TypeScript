//tuple are fix in length
var myTuple = [1, "asdf"];
//enum
var data1;
(function (data1) {
    data1[data1["No"] = 0] = "No";
    data1[data1["Yes"] = 1] = "Yes";
    data1[data1["Maybe"] = 2] = "Maybe";
})(data1 || (data1 = {}));
var doit = data1.Maybe;
//# sourceMappingURL=Tuples.js.map