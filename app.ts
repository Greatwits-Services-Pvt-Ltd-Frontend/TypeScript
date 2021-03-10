// export{}

// let a="hello world"
// console.log(a)


// function add(a,b){
//     console.log(a+b)
// }
// add(2,2)


// class app{
//     getname(){
//         console.log("shivji")
//     }
// }
// let a1=new app()
// a1.getname()


// class hello{
//     myname="sunny"
//     say(){
//         console.log(this.myname)
//     }
// }
// let b=new hello()
// b.say()


// function mytype(){
//     return this.mytype="string"
// }
// console.log(mytype())


// function adding(c,d){
//     return c+d
// }
// console.log(adding(3,3))


// let age:number=22;
// console.log(age)

// ---------------------

// function total(n1:number,n2:number){
//     {
//         if(typeof n1 !=="number" || typeof n2 !=="number")
//         {
//             throw new Error("incorrct error!!!!!")
//             // or
//             // console.log("Incorrect")
//         }
//             return n1+n2
//     }
// }
// var thetotal=(total(5,4));
// console.log(thetotal);


// ----------------------------

// function total(n1:number,n2:number,show:boolean,marks:string){
//     {
//         if(show){
           
//           console.log(marks+(n1+n2))
//         }
//             return n1+n2
//     }
// }
// var n1=5;
// var n2=4;
// var show=true;
// var marks="Your Marks is :"
// total(n1,n2,show,marks)


// -------------------
// Object--

// let details:any={
//     firstname:"sumit",
//     lastname:"sharma",
//     idis:[2,"one"]
// }
// details.idis.push("ankit")
// console.log(details.idis)
// console.log(typeof(details.idis) )
// details.firstname = "ankit"
// console.log(details.toUpperCase())


// interface biodata{
// firstname:string;
// lastname:string;
// id:number;
// datas:object
// }
// let detils: biodata={
//     firstname:"shivji",
// lastname:"prasad",
// id:27653,
// datas:["first",2]
// }
// console.log(detils.datas)


// Arrays--------------


// let arr:any=['sumit']

// console.log(arr)



// Enum-----

 
// enum days{
//     mon="monday",
//     tues="Tuesday",
//     wed="wednesday",
//     thurs="thursdsay"
// }
// let checkday:days
// checkday=days.mon
// console.log(days.mon)
// console.log(checkday)



// enum days{
//     mon,tue,wed
// }
// console.log(days.mon)


// Any-----

// let days:any={
//     mon:"monday",
//         tues:"Tuesday",
//         wed:"wednesday",
//         thurs:"thursdsay",
//         month:12
// }
// console.log(days.month)



// Union

// function combine(n1:number|string,n2:number|string){
// let result;
// result=Number(n1)+Number(n2)
//     return result
// }
// console.log(combine(2,2))


// function combine(n1:number|string,n2:number|string){
//     let result;
//     result=n1.toString()+n2.toString()
//         return result
//     }
//     console.log(combine(2,2))


// function combine(n1:number|string,n2:number|string){
//     let result;
//     if(typeof n1==='number' && typeof n2==='number'){
//         result=n1+n2
//     }
// else {
// result=n1.toString()+n2.toString()
// }
// return result
// }
// console.log(combine(2,2))
// console.log(combine('max','shary'))


// Literal Type--

// function combine(a:number=22,b:number=2,c:string="2"){
// console.log(a+b+(c))
// }
// combine()


// Function  Return Type--

// function add(n1:number,n2:number){
//     return n1+n2
// }
// function printresult(num:number):void{

//     console.log("Result:"+num)
// }
// printresult(add(5,5))




// Function as Types---

// function add(n1:number,n2:number){
//     return n1+n2
// }
// function printresult(num:number):void{

//     console.log("Result:"+num)
// }
// printresult(add(5,5))

// let combinevalue;
// combinevalue=add
// console.log(combinevalue(6,6))


//Practice---- 



// function add(a:number,b:number){
//     if(typeof a !=="number" || typeof b!=="number"){
//         return "error"
//     }
//     else{
//         return a+b
//     }
// }
// console.log(add(3,5))

// -----

// function result(a:number,b:number)
// {
    
//     console.log(`My Marks is `+(a+b))
// }
// result(2,2)

// ------

// ---
//  enum day{
//      mon=1,tue,wed
//  }
//  console.log(day.tue)


//  enum days{
//      mon="monday",
//      tue="tuesday"
// }
// let checkday=days
// console.log(checkday.mon)



// function combine(a:number|string,b:number|string){
//     if(typeof a==="number" && typeof b==="number"){
//         return a+b
//     }
//     else(typeof a==="string" && typeof b==="string");{
//         return a.toString()+b.toString()
//     }
// }
// console.log(combine(3,'3'))



// Arrow Function---

// let say=(a:number,b:number)=>{
// return a+b
// }
// console.log(say(2,2))


// let add=(a:number,b:number=9)=> a+b;
// console.log(add(2))



// Spread Operator---


// let hobbies=['sports','cooking']
// let newlist=['singing']
// newlist.push(...hobbies)
// console.log(newlist)



// function add(c,d,e){
//     console.log(c+d+e)
// };
// var mylist=[2,2,2];
// add.apply(null,mylist);


// let person={
//     name:"sumit",
//     age:25
// }
// let copylist={...person}
// console.log(copylist)


// Rest Parameter--


// function sum(...input){
//     console.log(...input)
// }
// sum(2,2,2,2,3)



// const add=(...numbers:number[])=>{
//     return numbers.reduce((curresult,curvalue)=>{
//         return curresult+curvalue
//     },0);
// };
// const addnumber=add(2,3,4,5)
// console.log(addnumber)



// Object Destructing-----

// let detail={
//     firstname:"sumit",
//     lastname:"sharma"
// }
// console.log(detail)
// let{firstname,lastname}=detail;
// console.log(firstname)


// Array Destructing----

// let list=["sumit","ankit","sushant"]
// let[top1,top2,top3]=list
// console.log(top2)



// Class------------------------------------------------

// class student{
//     biodata(){
//         console.log("This is a class")
//     }
// }
// let a1=new student();
// a1.biodata()

// 

// class marks{
//     total=22;
//    give(){
//         console.log("Total Marks is :"+this.total)
//     }
// }
// let given=new marks()
// given.give()

// 

// class department{
//     name:string;
//     constructor(n){
//         this.name=n
//     }
// }
// let a2=new department("account")
// console.log(a2)

// 

// class department{
//     name:string;
//     constructor(n:string){
//         this.name=n
//     }
//     describe(){
//         console.log("Deaprtment:"+ this.name)
//     }
// }
// let a2=new department("account")
// console.log(a2)

// 

// class channel{
//     names:string="Hindi and English";
//     constructor(){
//         this.names
//     }
// }
// let a3=new channel()
// console.log(a3)

// 

// class department{
//     name:string;
//   public  employee:string[]=[]
//     constructor(n:string){
//         this.name=n
//     }

//     describe(this:department){
//         console.log("Department:"+ this.name)
//     }
    
//     addemployee(employee:string){
//         this.employee.push(employee)
//     }
    
//     totalemployee(){
//         console.log(this.employee.length)
//         console.log(this.employee)
//     }
// }
// let say=new department('accounts')
// say.name="new name"
// say.describe();
// say.addemployee('max')
// say.addemployee("paul")
// say.employee[2]="babaka"
// say.totalemployee()

// Inheritance----------------------------

// class parents{
//     name="hello Inheritance"
//     setname(){
//         this.name;
//     }
// }
// class child extends parents{
//     getname(){
//         return this.name;
//     }
// }
// let a1=new child()
// a1.setname()
// console.log(a1.getname())


// Using Interface with Classes


// class add{
//     total(a,b){
//         console.log(a+b)
//     }
// }
// let get=new add()
// get.total(2,


// class printit{
//     get()
//     {
//         console.log("My name is Sumit Sharma..")
//     }
// }
// let a2=new printit()
// a2.get()

            
// class say{
//     name:"ankit";
//     get()
//     {
//         return this.name
//     }
// } 
// let b=new say()
// b.get()


// let say=()=>{
// return "my name is......."
// }
// console.log(say())

// interface bee{
//     name:string,
//     id:number,
//     status:boolean,
//     getname:()=>string
// }
// let say:bee={
//     name:"ankit",
//     id:22,
//     status:true,
//     getname:function (){return "hello function"}
// }
// console.log(say.getname())
                                                    


// function give(a){
//     return a
// }
// console.log(give(22))
            

// function say(data){
//     return data
// }
// console.log(say({name:"sumit",id:22}))

// class department{
//     name:string;
//     constructor(n){
//         this.name=n
//     }
// }
// let a=new department("accounts...")
// console.log(a)

// let say="hello"
// console.log(say.length)


// let names=(first,last)=>{
// console.log(last)
// }
// names("sumit","sharma")




// class student{
//     name:string
//     age:number
//     id:number
//     constructor(n,age1,id1){
//          this.name=n;
//         this.age=age1;
//         this.id=id1
//     }

// biodata(){
        
//     console.log(`My name is ${this.name},My age is ${this.age},My id is ${this.id}...`)

// }
// }
// let obj=new student('vinod',22,3442)
// obj.biodata()




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



