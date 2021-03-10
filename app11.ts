interface Per{
    name:string,
    age:number;
    greet(phrase:string):void
}
let u1:Per;
u1={
    name:"suprava",
    age:23,
    greet(phrase:string){
        console.log(phrase+''+this.name+''+this.age)
    }
};
u1.greet('hy i am ');