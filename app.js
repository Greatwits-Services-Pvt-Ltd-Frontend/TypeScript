"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// let b="hello";
// console.log(b);
// class App{
// test(){
//     console.log("test method is created");
// }
// }
// let a1=new App();
//  a1.test();
// let a:number=5.7;
// console.log(a);
// let b1:string='10';
// console.log(b1);
// let c:boolean=true;
// console.log(c);
// let datas=['anky','summit',5]
// datas.push(10)
// console.log(datas)
// let value=['anky','summit',7]
// value.push(5)
//  console.log(value)
// let da=['anky','summit','piyush']
// da[2]='anil'
// console.log(da)
// let ta:any=['ankit','summit',5]
// ta.push(true)
// console.log(ta)
// let user={
//     name:'ankit',
//     age:25,
//     address:'delhi'
// }
// user.name="rahul"
// console.log(user);
// let data: string|boolean|number="anil"
// data=true;
// data=30;
// console.log(data)
// interface userType{
//     name:string,
//     age:number,
//     getName:()=>string
// }
// let users:userType={
//     name:"ankit",
//     age:24,
//     getName:function(){
//         return "ankit gaur"
//     }
// }
// console.log(users.getName());
// function cals():number{
// return 10+10;
// }
// console.log(cals())
// function cal(a):number{
//     return a;
//     }
//     console.log(cal(10))
// function ca(a:number):number{
//     return a;
//     }
//     console.log(ca(10))
// function cac(a:number,b:number):number{
//     return a+b;
//     }
//     console.log(cac(10,20))
//     function cacs(a:number,b?:number):number{
//         return b?a+b:a;
//         }
//         console.log(cacs(10))
var App = /** @class */ (function () {
    function App() {
        this.name = "ankit";
        console.log("constr called");
    }
    App.prototype.getName = function () {
        console.log(this.name);
    };
    return App;
}());
var a1 = new App();
a1.getName();
var Apps = /** @class */ (function () {
    function Apps(name) {
        this.names = name;
    }
    Apps.prototype.getName = function () {
        console.log(this.names);
    };
    return Apps;
}());
var b1 = new Apps("anky");
b1.getName();
var Ap = /** @class */ (function () {
    function Ap(name) {
        this.names = "anil";
        this.names = name;
    }
    Ap.prototype.getName = function () {
        return (this.names);
    };
    return Ap;
}());
var c1 = new Ap("sumit");
console.log(c1.getName());
var Parent = /** @class */ (function () {
    function Parent() {
    }
    Parent.prototype.setName = function (name) {
        this.names = name;
    };
    return Parent;
}());
var child = /** @class */ (function (_super) {
    __extends(child, _super);
    function child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    child.prototype.getName = function () {
        return this.names;
    };
    return child;
}(Parent));
var q1 = new child();
q1.setName("ankit");
console.log(q1.getName());
var UsersUtils;
(function (UsersUtils) {
    var Users = /** @class */ (function () {
        function Users() {
        }
        Users.prototype.getName = function () {
            return "ankit";
        };
        return Users;
    }());
    UsersUtils.Users = Users;
})(UsersUtils || (UsersUtils = {}));
var u1 = new UsersUtils.Users();
console.log(u1.getName());
var student_1 = require("./student");
var teacher_1 = require("./teacher");
var teacher = new teacher_1["default"]();
console.log(teacher.data);
var student = new student_1["default"]();
console.log(student.data);
function users(data) {
    return data;
}
console.log(users({ name: "ankit", age: '25' }));
function user(data) {
    return data;
}
console.log(user("anky"));
var Days;
(function (Days) {
    Days[Days["mon"] = 0] = "mon";
    Days[Days["tue"] = 1] = "tue";
    Days[Days["wed"] = 2] = "wed";
    Days[Days["thur"] = 3] = "thur";
    Days[Days["fri"] = 4] = "fri";
    Days[Days["sat"] = 5] = "sat";
})(Days || (Days = {}));
function whichDay(Days) {
    return Days;
}
console.log(whichDay(Days.sat));
