// class Dep{
//     name:string;
//     constructor(n:string){
//         this.name=n;
//     }
// }
// let n1=new Dep("suprava")
// console.log("dep is"+n1)

//constructor

class Dep{
        name:string;
         constructor(n:string){
             this.name=n;
         }
         des(){
             console.log("depa is" +this.name)
         }
        }
let cv=new Dep("suprava");
cv.des();