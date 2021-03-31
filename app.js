let user = {
    fName: "piyush",
    lastname: "katiyar",
    age:23
  };
  
  function func() {
    console.log(this.fName);
  }
  
  let funcUser = func.bind(user);
  funcUser();
  
