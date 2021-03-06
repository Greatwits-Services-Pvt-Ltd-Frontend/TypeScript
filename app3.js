function add(i, o) {
    var r;
    if (typeof i === "number" && typeof o === "number") {
        r = i + o;
    }
    else{
        r=i.toString()+o.toString();
    }
    //const r=i+o;
    return r;
}
var q = 23;
var r = 34;
console.log(add(q, r));
var f = "sup";
var g = 12;
console.log(add(f, g));
