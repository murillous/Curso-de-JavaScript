// object = A group of properties and methods
//          properties = what an object has
//          methods = what an object can do
//          use . to access properties/methods

const car1 = {
    model:"Mustang",
    color:"Red",
    year: 2023,

    drive: function(){
        console.log("You drive the car")
    },
    brake: function(){
        console.log("You step on the brake")
    },
}
const car2 = {
    model:"Camaro",
    color:"Amarelo",
    year: 2018,

    drive: function(){
        console.log("You drive the car")
    },
    brake: function(){
        console.log("You step on the brake")
    },
}

console.log(car1.model, car1.color, car1.year);
car1.drive()
car1.brake()

console.log(car2.model, car2.color, car2.year);
car2.drive()
car2.brake()