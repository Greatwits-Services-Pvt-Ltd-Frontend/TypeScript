function add(n:number,n2:number)
{
    return n+n2
}
function adds(n3:number):void {
    console.log("sum is"+n3)
}
adds(add(4,7))
//let c:Function;
let c:(a:number,b:number)=>number
c=add;
console.log(c(3,4))