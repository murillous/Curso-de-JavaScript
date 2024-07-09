// constructor = a scpecial method of a class,
//               accepts arguments and assigns properties

class Student{

    constructor(name,age,gpa){
        this.name = name
        this.age = age
        this.gpa = gpa
    }
    study(){
        console.log(`${this.name} is studying`);
    }
}

const student1 = new Student("Murilo", 19, 3.2)
const student2 = new Student("Erick", 20, 4.2)
const student3 = new Student("Gusta", 21, 1.2)

console.log(student1.age)
student1.study()
student2.study()
student3.study()
