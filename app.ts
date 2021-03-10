export{}

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




class add{
    total(a,b){
        console.log(a+b)
    }
}
let get=new add()
get.total(2,2)


class printit{
    get()
    {
        console.log("My name is Sumit Sharma..")
    }
}
let a2=new printit()
a2.get()

            
class sasy{
    name:"ankit";
    get()
    {
        return this.name
    }
} 
let b=new sasy()
b.get()


let sy=()=>{
return "my name is......."
}
console.log(sy())

interface bee{
    name:string,
    id:number,
    status:boolean,
    getname:()=>string
}
let sa:bee={
    name:"ankit",
    id:22,
    status:true,
    getname:function (){return "hello function"}
}
console.log(sa.getname())
                                                    


function give(a){
    return a
}
console.log(give(22))
            

function y(data){
    return data
}
console.log(y({name:"sumit",id:22}))

class department{
    name:string;
    constructor(n){
        this.name=n
    }
}
let a=new department("accounts...")
console.log(a)

let say="hello"
console.log(say.length)


let names=(first,last)=>{
console.log(last)
}
names("sumit","sharma")




class stud{
    name:string
    age:number
    id:number
    constructor(n,age1,id1){
         this.name=n;
        this.age=age1;
        this.id=id1
    }

biodata(){
        
    console.log(`My name is ${this.name},My age is ${this.age},My id is ${this.id}...`)

}
}
let ob=new stud('vinod',22,3442)
ob.biodata()




class student{
   
    constructor( private name,private age,private id){
         this.name;
        this.age;
        this.id
    }

biodata(){
        
    console.log(`My name is ${this.name},My age is ${this.age},My id is ${this.id}...`)

}
}
let obj=new student('vinod',22,3442)
obj.biodata()

