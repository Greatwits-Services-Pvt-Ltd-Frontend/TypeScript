"use strict";
var _a;
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
//     class App{
//         name="ankit"
//         constructor(){
//             console.log("constr called");
//         }
//         getName(){
//         console.log(this.name)
//         }
//         }
//         let a1=new App();
//         a1.getName();
//         class Apps{
//             names;
//             constructor(name){
//                 this.names=name
//             }
//             getName(){
//             console.log(this.names)
//             }
//             }
//             let b1=new Apps("anky");
//             b1.getName();
//             class Ap{
//                 names:string="anil";
//                 constructor(name:string){
//                     this.names=name
//                 }
//                 getName():string{
//                 return(this.names)
//                 }
//                 }
//                 let c1=new Ap("sumit");
//                 console.log(c1.getName());
//             class Parent{
//                 names:string;
//                 setName(name){
//                     this.names=name;
//                 }
//             }
//             class child extends Parent{
//                 getName():string{
//                     return this.names;
//                 }
//             }
//             let q1=new child();
//             q1.setName("ankit");
//             console.log(q1.getName())
// namespace UsersUtils{
//     export class Users{
//         getName(){
//             return "ankit"
//         }
//     }
// }
// let u1=new UsersUtils.Users();
// console.log(u1.getName());
// import slogin from './student'
// import tlogin from './teacher'
// let teacher=new tlogin();
// console.log(teacher.data)
// let student=new slogin();
// console.log(student.data)
function users(d) {
    return d;
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
function whichDay(day) {
    return day;
}
console.log(whichDay(Days.sat));
var s1 = Symbol();
var s2 = Symbol();
// console.log(s1)
console.log(s1 === s2);
var a1 = Symbol("d1");
var a2 = Symbol("d2");
console.log(a1);
var j1 = Symbol("d11");
console.log(j1);
var data = (_a = {},
    _a[j1] = "some data",
    _a);
console.log(data[j1]);
var h1 = Symbol("d12");
var Demos = /** @class */ (function () {
    function Demos() {
    }
    Demos.prototype.demoF1 = function () {
        return "some data";
    };
    return Demos;
}());
var d12 = new Demos();
console.log(d12.demoF1());
var demoF11 = Symbol("d13");
var Demo = /** @class */ (function () {
    function Demo() {
    }
    Demo.prototype[demoF11] = function () {
        return "some data";
    };
    return Demo;
}());
var d13 = new Demo();
console.log(d13[demoF11]());
