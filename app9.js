var Dep = /** @class */ (function () {
    function Dep(n) {
        this.name = n;
    }
    Dep.prototype.des = function () {
        console.log("depa is" + this.name);
    };
    return Dep;
}());
var c = new Dep("suprava");
c.id[0] = 2;
