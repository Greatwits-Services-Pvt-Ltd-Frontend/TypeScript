const Person: {
    name: string;
    age: number;
    hobbies:string[];
    role:[number,string];
} = {
    name: `hemant`,
    age: 27,
    hobbies: ["cricket", 'badminton'],
role:[2,"developer"]
};
console.log(Person.name);

for (const hobby of Person.hobbies) {
    console.log(hobby);
}
Person.role = [1,"hemant"];
console.log(Person.role);
Person.role.push["VERMA"];
console.log(Person);
for (const roles of Person.role) {
    console.log(roles);
}