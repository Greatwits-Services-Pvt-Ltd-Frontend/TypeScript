class Youtube{
    
    constructor(private firstname:string,readonly age:number, Lastname:string)
    {
        
    }
    getFirstname(){
        console.log("my first name is"+this.firstname+""+this.age+ this.Lastname);
    }
    getLastname(){
    
    
    }
}

const some = new Youtube("pryia",9,"nishi");

some.getFirstname();


class User {
    constructor(
      private name: string,
      private surname: string,
      private age: number
    ) {}
    
    somemethod(){
        console.log(this.name);
    }
  }


  let newUser = new User("sumit","ankit",90);

  console.log(newUser);

