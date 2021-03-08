// class Stu{
//   name:string;
//   constructor(n:string){
//       this.name=n;
//   }
// }
// const c=new Stu("suprava")
// console.log(c)

//constructor

class Stu{
      name:string;
       constructor(n:string){
           this.name=n;
       }
       depa(){
           console.log("depart is"+this.name)
       }
     }
const d=new Stu("suprava priyadarshini sahoo")
console.log(d)
d.depa();
const ds={depa:d.depa}
ds.depa()
