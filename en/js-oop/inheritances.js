/*
Class Inheritance: To create a class inheritance use the extends keyword. 
A class created with a class inheritance, inherit all the methods from parent/super class. 
*/

class Car{

    constructor(brand){
        this.carName = brand; 
    }
    getCarInfo(){
        return `My car is ${this.carName}`; 
    }
}

// Lets create child class that will extends Car class: 
// Model is child of Car
class Model extends Car{ 

    constructor(brand, mod) {
        super(brand); 
        //by super() keyword we call the parents constructor methods. 
        this.Model = mod; 
    }

    showInfo() {
        return this.getCarInfo() + ' and car model is '+ this.model; 
    }
}

// let create a new car: 
const car2 = new Model("Toyota", "Avalon"); 
console.log(car2.showInfo()) ; //My car is Toyota and car model is Avalon