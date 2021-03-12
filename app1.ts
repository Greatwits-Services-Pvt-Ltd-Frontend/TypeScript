type hemant = {
    name: string;
    lastname:string;
};
type shanky = {
    name: string;
    sirname: string;
};
type details = hemant&shanky;
const e1:details = {
    name:"hello",
    lastname: "sir",
    sirname: "how are you?",
};
//  combining two types into 1 object is called intersection type 