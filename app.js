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
//         if(typeof n1 !=="number" || typeof n2 !=="number"){
//             // throw new Error("incorrct error!!!!!")
//             // or
//             console.log("Incorrect")
//         }
//             return n1+n2
//     }
// }
// var n1='5';
// var n2=4;
// var thetotal=(total(n1,n2));
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
