// let v="sup";
// v="priy";
// console.log(v)
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Arrow Function
// const add=(a:number,b:number)=>{
//     return a+b;
// }
// console.log(add(5,6));
//Default parameter
// const add=(a:number,b:number=1)=>{
//     return a+b;
// }
// console.log(add(5));
//spread 
// const h=["s","p"];
// const a=["l"];
// //a.push(h[0]);
// a.push(...h)
// console.log(a)
var p = {
    name: "suprava",
    age: 23
};
var cp = __assign({}, p);
console.log(cp);
