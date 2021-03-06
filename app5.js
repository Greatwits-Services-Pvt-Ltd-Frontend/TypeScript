function add(n, n2) {
    return n + n2;
}
function adds(n3) {
    console.log("sum is" + n3);
}
adds(add(4, 7));
//let c:Function;
var c;
c = add;
console.log(c(3, 4));
