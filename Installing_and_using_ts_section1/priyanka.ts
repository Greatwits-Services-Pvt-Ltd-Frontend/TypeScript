class Department{
    name:string;
    id:number
    private employees:string[]=[];
    constructor(n:string,id:number){
        this.name = n;
        this.id=id;
        
    }

    describe(this:Department){
        console.log('Department :  '+this.name)
    }

    addEmployee(employee:string){
        this.employees.push(employee)
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting= new Department('Acounting',1);

console.log(accounting);
accounting.describe();
// const acountingCopy = {name:"priyanka",id:2,describe: accounting.describe};

// acountingCopy.describe();

accounting.addEmployee('Ankit');
accounting.addEmployee('sumit');
accounting.addEmployee('Suprava');
// accounting.employees[3]="Nishi";
accounting.printEmployeeInformation();
