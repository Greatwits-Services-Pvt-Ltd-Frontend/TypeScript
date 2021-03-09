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
var student = /** @class */ (function () {
    function student() {
    }
    student.prototype.biodata = function () {
        console.log("This is a class");
    };
    return student;
}());
var a11 = new student();
a11.biodata();
var marks = /** @class */ (function () {
    function marks() {
        this.total = 22;
    }
    marks.prototype.give = function () {
        console.log("Total Marks is :" + this.total);
    };
    return marks;
}());
var given = new marks();
given.give();
var departments = /** @class */ (function () {
    function departments(n) {
        this.name = n;
    }
    return departments;
}());
var a22 = new departments("account");
console.log(a22);
var departmentss = /** @class */ (function () {
    function departmentss(n) {
        this.name = n;
    }
    departmentss.prototype.describe = function () {
        console.log("Deaprtment:" + this.name);
    };
    return departmentss;
}());
var a2 = new departmentss("account");
console.log(a2);
var channel = /** @class */ (function () {
    function channel() {
        this.names = "Hindi and English";
        this.names;
    }
    return channel;
}());
var a3 = new channel();
console.log(a3);
var department = /** @class */ (function () {
    function department(n) {
        this.employee = [];
        this.name = n;
    }
    department.prototype.describe = function () {
        console.log("Department:" + this.name);
    };
    department.prototype.addemployee = function (employee) {
        this.employee.push(employee);
    };
    department.prototype.totalemployee = function () {
        console.log(this.employee.length);
        console.log(this.employee);
    };
    return department;
}());
var say = new department('accounts');
say.name = "new name";
say.describe();
say.addemployee('max');
say.addemployee("paul");
say.employee[2] = "babaka";
say.totalemployee();
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
