//spread operator
const hobbies = ['playing','painting','cooking'];
const activeHobbies = ['writting'];
activeHobbies.push(...hobbies);

console.log(activeHobbies)


const person ={
    name:"Priyanka",
    work:"Developer",
    place:"Noida"
} 
function addProperty({...person}){
person.name = "Nishi"
console.log(person);


}
// addProperty({...person});
console.log(addProperty({...person}) );






