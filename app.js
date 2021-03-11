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
var Parent = /** @class */ (function () {
    function Parent() {
    }
    Parent.prototype.setName = function (name) {
        this.name = name;
    };
    return Parent;
}());
var child = /** @class */ (function (_super) {
    __extends(child, _super);
    function child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    child.prototype.getName = function () {
        return this.name;
    };
    return child;
}(Parent));
var c1 = new child();
c1.setName("bruce");
console.log(c1.getName());
var Days;
(function (Days) {
    Days[Days["mon"] = 10] = "mon";
    Days[Days["tue"] = 11] = "tue";
    Days[Days["wed"] = 12] = "wed";
    Days[Days["thur"] = 13] = "thur";
})(Days || (Days = {}));
function whichDay(day) {
    return day;
}
console.warn(whichDay(Days.wed));
var s1 = Symbol();
var s2 = Symbol();
console.log(s1 === s2);
function users(data) {
    return data;
}
console.log(users({ name: "anil", age: '30' }));
