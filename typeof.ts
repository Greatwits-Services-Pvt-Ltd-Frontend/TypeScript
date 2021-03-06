function add(n1:number,n2:number){
    if(typeof n1 !== "string" || typeof n2 !== "number"){
    throw new Error("wrong output");
    }
    // console.log(typeof number2);
    return n1+n2;
}
const n1= 7;
const n2=  6.5;
const result=add(n1, n2);
console.log(result);
