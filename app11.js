var u1;
u1 = {
    name: "suprava",
    age: 23,
    greet: function (phrase) {
        console.log(phrase + '' + this.name + '' + this.age);
    }
};
u1.greet('hy i am ');
