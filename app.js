"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var parents = /** @class */ (function () {
    function parents() {
        this.name = "hello Inheritance";
    }
    parents.prototype.setname = function () {
        this.name;
    };
    return parents;
}());
var child = /** @class */ (function (_super) {
    __extends(child, _super);
    function child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    child.prototype.getname = function () {
        return this.name;
    };
    return child;
}(parents));
var a1 = new child();
a1.setname();
console.log(a1.getname());
var add = /** @class */ (function () {
    function add() {
    }
    add.prototype.total = function (a, b) {
        console.log(a + b);
    };
    return add;
}());
var get = new add();
get.total(2, 2);
var printit = /** @class */ (function () {
    function printit() {
    }
    printit.prototype.get = function () {
        console.log("My name is Sumit Sharma..");
    };
    return printit;
}());
var a2 = new printit();
a2.get();
var sasy = /** @class */ (function () {
    function sasy() {
    }
    sasy.prototype.get = function () {
        return this.name;
    };
    return sasy;
}());
var b = new sasy();
b.get();
var sy = function () {
    return "my name is.......";
};
console.log(sy());
var sa = {
    name: "ankit",
    id: 22,
    status: true,
    getname: function () { return "hello function"; }
};
console.log(sa.getname());
function give(a) {
    return a;
}
console.log(give(22));
function y(data) {
    return data;
}
console.log(y({ name: "sumit", id: 22 }));
var department = /** @class */ (function () {
    function department(n) {
        this.name = n;
    }
    return department;
}());
var a = new department("accounts...");
console.log(a);
var say = "hello";
console.log(say.length);
var names = function (first, last) {
    console.log(last);
};
names("sumit", "sharma");
var stud = /** @class */ (function () {
    function stud(n, age1, id1) {
        this.name = n;
        this.age = age1;
        this.id = id1;
    }
    stud.prototype.biodata = function () {
        console.log("My name is " + this.name + ",My age is " + this.age + ",My id is " + this.id + "...");
    };
    return stud;
}());
var ob = new stud('vinod', 22, 3442);
ob.biodata();
var student = /** @class */ (function () {
    function student(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
        this.name;
        this.age;
        this.id;
    }
    student.prototype.biodata = function () {
        console.log("My name is " + this.name + ",My age is " + this.age + ",My id is " + this.id + "...");
    };
    return student;
}());
var obj = new student('vinod', 22, 3442);
obj.biodata();
