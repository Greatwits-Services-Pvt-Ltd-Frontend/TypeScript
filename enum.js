var Role;
(function (Role) {
    Role[Role["AUTHOR"] = 0] = "AUTHOR";
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["READONLY"] = 2] = "READONLY";
})(Role || (Role = {}));
;
var person = {
    name: "hemant",
    age: 27,
    hobbies: ["cricket", 'badminton'],
    role: Role.AUTHOR
};
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
