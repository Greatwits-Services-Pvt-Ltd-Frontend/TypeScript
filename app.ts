export{}

let b="hello";
console.log(b);

class App{
test(){
    console.log("test method is created");
}
}
let a1=new App();
 a1.test();

let a:number=5.7;
console.log(a);

let b1:string='10';
console.log(b1);

let c:boolean=true;
console.log(c);

let datas=['anky','summit',5]
datas.push(10)
console.log(datas)

let value=['anky','summit',7]
value.push(5)
 console.log(value)

let da=['anky','summit','piyush']
da[2]='anil'
console.log(da)

let ta:any=['ankit','summit',5]
ta.push(true)
console.log(ta)

let user={
    name:'ankit',
    age:25,
    address:'delhi'
}
user.name="rahul"
console.log(user);

let data: string|boolean|number="anil"
data=true;
data=30;
console.log(data)

interface userType{
    name:string,
    age:number,
    getName:()=>string
}
let users:userType={
    name:"ankit",
    age:24,
    getName:function(){
        return "ankit gaur"
    }
}
console.log(users.getName());