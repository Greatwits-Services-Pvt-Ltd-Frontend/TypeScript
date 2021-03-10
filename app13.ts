type Admin={
    name:string,
    age:number
}
type Sd={
    name:string,
    stratdate:Date;
};
type As=Admin & Sd;
const e1:As={
    name:"suprava",
    age:23,
    stratdate:new Date()
};
// type co=string|number;
// type nu=number|boolean;
// type jk=co&nu;
