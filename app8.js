// class Dep{
//     name:string;
//     constructor(n:string){
//         this.name=n;
//     }
// }
// let n1=new Dep("suprava")
// console.log("dep is"+n1)
//constructor
var Dep = /** @class */ (function () {
    function Dep(n) {
        this.name = n;
    }
    Dep.prototype.des = function () {
        console.log("depa is" + this.name);
    };
    return Dep;
}());
var cv = new Dep("suprava");
cv.des();
