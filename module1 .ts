class App {
  name = "ankit";
  constructor() {
    console.log("constr called");
  }
  getName() {
    console.log(this.name);
  }
}
let a1 = new App();
a1.getName();

class Apps {
  names;
  constructor(name) {
    this.names = name;
  }
  getName() {
    console.log(this.names);
  }
}
let b1 = new Apps("anky");
b1.getName();
