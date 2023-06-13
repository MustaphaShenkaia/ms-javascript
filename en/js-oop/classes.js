/*
==> Use the keyword class to create a class
==> Always add a method named constructor(){}. 
If you do not define a constructor, JS will add an empty constructor. 

Syntax: 
class className{
    constructor(){
​
    }
    method1(){
​
    }
}

//Note: A JS Class is not an object. It is template for JS objects. 
Constructor: Is a special method
    1) It has to have the exact name "constructor"
    2) it is execute automatically when a new object is been created. 
    3) It is used to initialize object properties. 
*/

// CLASS -> Variables - Constructor - Methods

class Car {
    name; 
    year; 

    constructor(nm, yr){
        this.name = nm; 
        this.year = yr; 
    }
    //Add age () which can calculate the age of the objects. 
    age() {
        let currentDate = new Date(); 
        return currentDate.getFullYear()-this.year; 
    }
}

//Lets create an car by using car class: 
const car1 = new Car("Camry", 2020); 
console.log(car1.name); // Camry
//Print the name property : Camry 

//Find out the age of car1: 
let ageOfCar1 = car1.age(); 
console.log(ageOfCar1); //3 

