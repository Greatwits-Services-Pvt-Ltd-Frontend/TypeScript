class Parent{
    name:"rahul";
    
    mygetName(){
        console.log("he"); 
    }


}
class Child extends Parent{
anGetName(){
    console.log("hello");
}
    
}
var my=new Child;
my.mygetName();
