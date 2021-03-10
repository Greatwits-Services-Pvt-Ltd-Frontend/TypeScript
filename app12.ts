interface Per{
    name:string,
    age:number;
    greet(phrase:string):void
}
class Greet implements Per{
    name:string;
    age=30;
    constructor (n:string){
        this.name=n;
    }
}