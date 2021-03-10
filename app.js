var Youtube = /** @class */ (function () {
    function Youtube(firstname, age, Lastname) {
        this.firstname = firstname;
        this.age = age;
    }
    Youtube.prototype.getFirstname = function () {
        console.log("my first name is" + this.firstname + "" + this.age + this.Lastname);
    };
    Youtube.prototype.getLastname = function () {
    };
    return Youtube;
}());
var some = new Youtube("pryia", 9, "nishi");
some.getFirstname();
var User = /** @class */ (function () {
    function User(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    User.prototype.somemethod = function () {
        console.log(this.name);
    };
    return User;
}());
var newUser = new User("sumit", "ankit", 90);
console.log(newUser);
