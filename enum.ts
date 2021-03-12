enum Role{AUTHOR,ADMIN,READONLY};
const person = {
    name: `hemant`,
    age: 27,
    hobbies: ["cricket", 'badminton'],
    role : Role.AUTHOR,
};


if (person.role===Role.AUTHOR) {
    console.log('is author');
    
}