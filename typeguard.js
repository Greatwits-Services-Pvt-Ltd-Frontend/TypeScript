function hello(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
}
function printinformation(info) {
    console.log("name " + info.name);
    if ("sirname" in info) {
        console.log("surname is " + info.sirname);
    }
}
var car = /** @class */ (function () {
    function car() {
    }
    car.prototype.drive = function () {
        console.log("car is driving");
    };
    return car;
}());
var bus = /** @class */ (function () {
    function bus() {
    }
    bus.prototype.drive = function () {
        console.log("car is driving");
    };
    bus.prototype.loadcargo = function (amount) {
        console.log("load cargo is" + amount);
    };
    return bus;
}());
var v1 = new car();
var v2 = new bus();
function usevehicle(vehicle) {
    if ("loadcargo" in vehicle) {
        vehicle.loadcargo(1000);
    }
}
usevehicle(v1);
