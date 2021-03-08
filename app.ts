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

let detail={
    firstname:"sumit",
    lastname:"sharma"
}
console.log(detail)
let{firstname,lastname}=detail;
console.log(firstname)


// Array Destructing----

let list=["sumit","ankit","sushant"]
let[top1,top2,top3]=list
console.log(top2)
