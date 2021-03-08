// class Stu{
//   name:string;
//   constructor(n:string){
//       this.name=n;
//   }
// }
// const c=new Stu("suprava")
// console.log(c)
//constructor
var Stu = /** @class */ (function () {
    function Stu(n) {
        this.name = n;
    }
    Stu.prototype.depa = function () {
        console.log("depart is" + this.name);
    };
    return Stu;
}());
var d = new Stu("suprava priyadarshini sahoo");
console.log(d);
d.depa();
var ds = { depa: d.depa };
ds.depa();
