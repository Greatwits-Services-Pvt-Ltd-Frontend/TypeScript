var Person = {
    name: "hemant",
    age: 27,
    hobbies: ["cricket", 'badminton'],
    role: [2, "developer"]
};
console.log(Person.name);
for (var _i = 0, _a = Person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
Person.role = [1, "hemant"];
