// inheritance = allows a new class to inherit properties and methods
//               from an existing class (parent -> child)
//               helps with code resusability

class Animal{
    alive = true;
    

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}
class Rabbit extends Animal{
    name = "rabbit"
}
class Frog extends Animal{
    name = "frog"
}
class Dog extends Animal{
    name = "dog"
}

const rabbit = new Rabbit();
const frog = new Frog();
const dog = new Dog();


frog.eat()
rabbit.sleep()
dog.alive = false
console.log(dog.alive)