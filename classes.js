var department = /** @class */ (function () {
    function department(n, m) {
        this.name = n;
        this.place = m;
    }
    return department;
}());
var accounting = new department("accounting", "delhi");
console.log(accounting);
