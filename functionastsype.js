function add(n1, n2) {
    return n1 + n2;
}
function print(num) {
    console.log("result is" + num);
}
print(add(4, 7));
var combine;
combine = add;
console.log(combine(3, 4));
