export{}
class student{
    biodata(){
        console.log("This is a class")
    }
}
let a11=new student();
a11.biodata()

class marks{
    total=22;
   give(){
        console.log("Total Marks is :"+this.total)
    }
}
let given=new marks()
given.give()

class departments{
    name:string;
    constructor(n){
        this.name=n
    }
}
let a22=new departments("account")
console.log(a22)

class departmentss{
    name:string;
    constructor(n:string){
        this.name=n
    }
    describe(){
        console.log("Deaprtment:"+ this.name)
    }
}
let a2=new departmentss("account")
console.log(a2)

class channel{
    names:string="Hindi and English";
    constructor(){
        this.names
    }
}
let a3=new channel()
console.log(a3)

class department{
    name:string;
  public  employee:string[]=[]
    constructor(n:string){
        this.name=n
    }

    describe(this:department){
        console.log("Department:"+ this.name)
    }
    
    addemployee(employee:string){
        this.employee.push(employee)
    }
    
    totalemployee(){
        console.log(this.employee.length)
        console.log(this.employee)
    }
}
let say=new department('accounts')
say.name="new name"
say.describe();
say.addemployee('max')
say.addemployee("paul")
say.employee[2]="babaka"
say.totalemployee()

class parents{
    name="hello Inheritance"
    setname(){
        this.name;
    }
}
class child extends parents{
    getname(){
        return this.name;
    }
}
let a1=new child()
a1.setname()
console.log(a1.getname())
