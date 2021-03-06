function addd(i:number|string|boolean,o:number){
    let r;
    if (typeof i==="number" && typeof o==="number"){
        r=i+o;
    }
    //const r=i+o;
    return r;
}
const q1=23;
const r1=34;
console.log(addd(q1,r1));
const f1="sup";
const g1=12;
console.log(add(f1,g1))