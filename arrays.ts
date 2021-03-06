const Person: {
    name: string;
    age: number;
    hobbies:string[];
} = {
    name: `hemant`,
    age: 27,
    hobbies: ["cricket", 'badminton'],

};
console.log(Person.name);

for (const hobby of Person.hobbies) {
    console.log(hobby);
}


