// Class Inheritance 

//parent class = super class 
class car2{  
    constructor(brand){
        this.car2Brand = brand;
    }
    Brandim(){
        return 'superClass tan carBrand: '+ this.car2Brand;
    }

}
/*
child class ta extends keyword u kullanılır.
"super" keyword ile superClass (parentClass) un constructınıda çağırarak kullanır. 
Bu sayede carBrand isimli bir variable oluşturulabilir. 
*/
class Model extends car2{ 

    constructor(brand, model){
        super(brand); 
        this.carModel = model;
    }

    BrandveModelim(){
        return 'superClass tan carBrand: '+ this.car2Brand + ', childClass tan carModel :' + this.carModel;
    }
} 
// model class ta bir instance super class a ait car brand değeri atanarak geliyor.
let myCar2= new Model('Honda', 'Civic');
console.log(myCar2);//Model { car2Brand: 'Honda', carModel: 'Civic' }
console.log(myCar2.Brandim());//superClass tan carBrand: Honda
console.log(myCar2.BrandveModelim());  //superClass tan carBrand: Honda, childClass tan carModel :Civic

