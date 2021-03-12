interface bird{
    type:`bird`;
    flyingspeed:number;
}

interface horse{
    type:`horse`;
    runningspeed:number;
}


type animal = bird|horse;
function movinganimal(animal:animal) {
    let speed;
    // if (`flyingspeed` in animal) {
    //     console.log(`moving speed is:` +animal.flyingspeed);
    // }
    switch (animal.type) {
        case `bird`:
            speed= animal.flyingspeed;
            break;
    case`horse`:
    speed=animal.runningspeed;
    break;
        default:
        
    }
}