// getter = special method that makes a property readable
// setter = special method that makes a property writeable

// validate and modify a value when reading/writing a property

class Rectangle{

    constructor(width, height){
        this.width = width;
        this.height = height;
    } 

    set width (newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("Width must be a postive number")
        }
    }

    set height (newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error("Height must be a postive number")
        }
    }

    get width(){
        return this._width;
    }

    get height(){
        return this._height;
    }

    // dá pra adicionar variaveis que não estão no constructor

    get area(){
        return this._width * this._height;
    }
}
// set para escrever
// get para ler os dados escritos
const rectangle = new Rectangle (3,4)

// usando set dá pra mudar os valores posteriormente

rectangle.width = 5;
rectangle.height = 2;

console.log(rectangle.width,rectangle.height);
console.log(`A area é de ${rectangle.area}cm²`);