"use strict";
exports.__esModule = true;
var b = "hello";
console.log(b);
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.test = function () {
        console.log("test method is created");
    };
    return App;
}());
var a1 = new App();
a1.test();
var a = 5.7;
console.log(a);
var b1 = '10';
console.log(b1);
var c = true;
console.log(c);
var datas = ['anky', 'summit', 5];
datas.push(10);
console.log(datas);
var value = ['anky', 'summit', 7];
value.push(5);
console.log(value);
var da = ['anky', 'summit', 'piyush'];
da[2] = 'anil';
console.log(da);
var ta = ['ankit', 'summit', 5];
ta.push(true);
console.log(ta);
var user = {
    name: 'ankit',
    age: 25,
    address: 'delhi'
};
user.name = "rahul";
console.log(user);
var data = "anil";
data = true;
data = 30;
console.log(data);
var users = {
    name: "ankit",
    age: 24,
    getName: function () {
        return "ankit gaur";
    }
};
console.log(users.getName());
