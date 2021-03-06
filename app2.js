var role;
(function (role) {
    role[role["ADMIN"] = 0] = "ADMIN";
    role[role["READONLY"] = 1] = "READONLY";
})(role || (role = {}));
;
var p = //:{
 
//    name:string,age:number,hb:string[],gh:[number,string]
// }
{
    name: "puja",
    age: 24,
    hb: ["a", "b"],
    gh: [2, "fg"],
    rol: role.ADMIN
};
p.gh.push("sup");
//p.gh[1]=20
console.log(p.gh);
console.log(p.age);
console.log(p.name);
console.log(p.rol);
for (var _i = 0, _a = p.hb; _i < _a.length; _i++) {
    var i = _a[_i];
    console.log(i);
}
if (p.rol == role.ADMIN) {
    console.log("true");
}
else {
    console.log("false");
}
