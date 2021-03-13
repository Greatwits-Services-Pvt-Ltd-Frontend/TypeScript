class Department{
    name:string;
    constructor(n:string){
        this.name = n;
    }

    describe(this:Department){
        console.log('Department :  '+ this.name);
        console.log('some code');
    }
}

const accounting= new Department('Acounting');

console.log(accounting);
accounting.describe();
const acountingCopy = {name:"priyanka",describe: accounting.describe};

acountingCopy.describe();













