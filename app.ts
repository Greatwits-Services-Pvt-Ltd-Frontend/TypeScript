export{}

class Parent{
    name:string;

setName(name){
    this.name=name
}
}
class child extends Parent{
    getName():string{
        return this.name
    }
}
let c1=new child();
c1.setName("bruce")
console.log(c1.getName())

enum Days{
mon=10,tue,wed,thur
}
function whichDay(day:Days)
{
    return day
}
console.warn(whichDay(Days.wed))

let s1=Symbol();
let s2=Symbol();
console.log(s1===s2)

function users(data)
{
    return data
}
console.log(users({name:"anil",age:'30'}))