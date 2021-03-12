function add(n1, n2) {
    return n1 + n2;
}
function print(num) {
    console.log("result is" + num);
}
print(add(4, 7));
var combine;
combine = add;
// combine = print;
console.log(combine(3, 4));
//  function and callbacks
function addhandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
