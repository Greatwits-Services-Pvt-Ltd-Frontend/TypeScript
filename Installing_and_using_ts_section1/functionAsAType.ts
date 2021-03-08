function combine(input1:number|string, input2:number|string){
    let result;
    if(typeof input1==="number" && typeof input2==="number"){
        result = input1 +input2;
    }else{
        result = input1.toString()+ input2.toString();
    }
    return result;
}
 const combineAges = combine(7,8);
 console.log(combineAges);

 const combinedNames = combine("priyanka","nishi");
 console.log(combinedNames);






