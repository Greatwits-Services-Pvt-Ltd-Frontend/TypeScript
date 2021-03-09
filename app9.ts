class Dep{
    public name:string;
    private id:number;
     constructor(n:string){
         this.name=n;
     }
     des(){
         console.log("depa is" +this.name)
     }
    }
let c=new Dep("suprava");
c.id[0]=2;