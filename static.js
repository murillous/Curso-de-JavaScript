// static = belongs to the class, not the objects
//          properties: useful for caches, fixed-configurations
//          methods:    useful for ultility functions

class Car{
    
    static numbersOfCars = 0;
    constructor(model){
        this.model = model;
        Car.numbersOfCars += 1; 
    }
    
    static startRace(){
        console.log("3...2...1...GO!")
    }
}

const car1 = new Car("Mustang")
const car2 = new Car("Uno Quadrado")
const car3 = new Car("Argo")
const car4 = new Car("Ka")
const car5 = new Car("Ferrari")

console.log(car1.model);
console.log(car2.model);
console.log(car3.model);
console.log(car4.model);

console.log(`Na sua garagem tem ${Car.numbersOfCars} carros`)
Car.startRace()