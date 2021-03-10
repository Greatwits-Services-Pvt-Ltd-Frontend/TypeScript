interface Data{
    name:string,
    age:number,

    greet(phrase:string):void;
}

let user1:Data;

user1 = {
    name :'Priyanka',
    age:25,
    greet(phrase:string){
        console.log(phrase + '' +  this.name);
    }


}

user1.greet('hey there i am  ')



