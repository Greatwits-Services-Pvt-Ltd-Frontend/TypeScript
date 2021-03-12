function add(n1:number,n2:number) {
    return n1+n2;
}
function print(num:number) {
    console.log("result is" + num);
}
print(add(4,7));
let combine:(a:number,b:number) => number;
combine = add;
// combine = print;
console.log(combine(3,4));


//  function and callbacks
function addhandle(n1:number,n2:number,cb:(num:number)=>number) {
    const result= n1+n2;
    cb(result);
}

