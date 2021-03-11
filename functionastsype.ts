function add(n1:number,n2:number) {
    return n1+n2;
}
function print(num:number) {
    console.log("result is" + num);
}
print(add(4,7));
let combine:(a:number,b:number) => number;
combine = add;
console.log(combine(3,4));
