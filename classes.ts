class department {
    name:string;
    place:string;

constructor(n:string,m:string){
    this.name= n;
    this.place= m;
}
}
const accounting = new department("accounting","delhi");
console.log(accounting);