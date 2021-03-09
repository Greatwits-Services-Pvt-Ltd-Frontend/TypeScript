class As{
    name:string;
    constructor(n:string){
        this.name=n;
    }
    des(this:As){
        console.log("skdmkd"+this.name)
    }
}
class Sd extends As{
    as(){

    console.log("as mkmdm"+this.name)
    }
}
let v=new Sd("dlmfcsdklmfcl");
v.as();