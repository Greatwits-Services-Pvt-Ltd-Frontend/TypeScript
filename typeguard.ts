type hemant = {
    name: string;
    lastname:string;
};
type shanky = {
    name: string;
    sirname: string;
};
// type details = hemant&shanky;
type kind= string;
function hello(a:kind,b:kind) {
    if (typeof a==="string" && typeof b==="string") {
        return a+b;
        

    }
}

// example of typeof typeguard in typescript



// example of typein typeguard in typescript
type information = shanky | hemant;
function printinformation(info:information) {
    console.log(`name `+info.name);
    if ("sirname" in info ){
        console.log("surname is " + info.sirname);
        
    }
}



class car{
    drive(){
        console.log("car is driving");
    }






}
class bus{
    drive(){
        console.log("car is driving");
    }

loadcargo(amount:number){
console.log("load cargo is"+amount);
}
}


// instance in typeguard of loadcargo 
type vehicle = car|bus;
const v1= new car();
const v2= new bus();
function usevehicle(vehicle:vehicle) {
    if ("loadcargo" in vehicle ) {
        vehicle.loadcargo(1000)
        
    }
    
}
usevehicle(v1);


