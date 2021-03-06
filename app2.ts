enum role {ADMIN,READONLY};
 const p=//:{
//    name:string,age:number,hb:string[],gh:[number,string]
// }
{
    name:"puja",
    age:24,
    hb : ["a","b"],
    gh:[2,"fg"],
    rol:role.ADMIN
};
p.gh.push("sup");
//p.gh[1]=20
console.log(p.gh)
console.log(p.age)
console.log(p.name)
console.log(p.rol)
for (const i of p.hb){
    console.log(i)
}
if (p.rol==role.ADMIN){
    console.log("true")
}
else{
    console.log("false")
}