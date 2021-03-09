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
var As = /** @class */ (function () {
    function As(n) {
        this.name = n;
    }
    As.prototype.des = function () {
        console.log("skdmkd" + this.name);
    };
    return As;
}());
var Sd = /** @class */ (function (_super) {
    __extends(Sd, _super);
    function Sd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sd.prototype.as = function () {
        console.log("as mkmdm" + this.name);
    };
    return Sd;
}(As));
var v = new Sd("dlmfcsdklmfcl");
v.as();
