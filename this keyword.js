// this = reference to particular object
//        the object depends on the immediate context

const car1 = {
    model:"Mustang",
    color:"Red",
    year: 2023,

    drive: function(){
        console.log(`You drive the car ${this.model} ${this.color}`)
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
        console.log(`You drive the car ${this.model} ${this.color}`)
    },
    brake: function(){
        console.log("You step on the brake")
    },
}

car1.drive()
car2.drive()