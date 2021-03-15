function Logger(logstring:string){
return function(constructor:Function){
    console.log(`loggging......`);
    console.log(constructor);
};

}

@Logger("hello")
class Person{
    name:`hemant`;


    constructor(){
        console.log(`creating object`);
    }
}


const pers = new Person();
console.log(pers);