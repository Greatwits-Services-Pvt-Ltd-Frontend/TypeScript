function Logger(logstring: string) {
    return function (constructor: Function) {
        console.log(`loggging......`);
        console.log(constructor);
    };

}



function withtemplate(template: string, id: string) {
    return function (constructor: function) {
        const hookEL = document.getElementById(id);
        if (hookEL) {
            hookEL.innerHTML = template;

        }
    }
}
@Logger("hello")
@withtemplate("myboy", "app")
class Person {
    name: `hemant`;


    constructor() {
        console.log(`creating object`);
    }
}


const pers = new Person();
console.log(pers);