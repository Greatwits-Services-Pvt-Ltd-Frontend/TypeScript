function Logger(){
    console.log(`loggging......`);
}



@Logger 
class Person {
    name:`hemant`;


    constructor(){
        console.log(`creating object`);
    }
}


const pers = new Person();
console.log(pers);