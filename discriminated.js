function movinganimal(animal) {
    var speed;
    // if (`flyingspeed` in animal) {
    //     console.log(`moving speed is:` +animal.flyingspeed);
    // }
    switch (animal.type) {
        case "bird":
            speed = animal.flyingspeed;
            break;
        case "horse":
            speed = animal.runningspeed;
            break;
        default:
    }
}
