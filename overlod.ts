type combinable = number| string;



// how to use function overloading
function add(n1:number,n2:number):number;
function add(n1:string,n2:string):string; 
function add(n1:combinable,n2:combinable) {
if (typeof n1===`string`|| typeof n2===`string`) {
    return n1.toString() + n2.toString();
}
return n1+n2;
}

    
const result = add(1,5);
console.log(result);