// JS CLASSES

// class lar object oluşturmak için birer template tır.
// "Class" keyword u kullanılmadılır. 

/*
constructor: 
"constructor" keyword u kullanmalı class ın içinde. 
yeni bir constructor oluşturulmadığı sürece, default olarak var olan constructor kullanılır.
class tan bir object oluşturduğumuzda otomatik olarak constructor invoke olur. 
*/

// Class -> Variables - Constructor - Methods

class car{

    name; 
    carYear; 
    
    constructor(name, year){
        this.name = name;
        this.carYear = year;
        //this.carAge= (new Date().getFullYear())-this.carYear;
        /*
        this keyword u car class ına ait objetName refer eder. 
        year olarak dışarıdan alınan veri this.carYear ile carYear değerine atanır.  
        */
    }
    /* 
    class içerisinde function(method) oluştururken 
    "function" keyword u yazılmasına gerek yoktur 
    */
    age(){                              
        let cy = new Date().getFullYear(); 
        let result= cy - this.carYear;
        return result;
    }
}

//car classına ait bir object instance ı 
let myCar = new car('Honda', 2011);

car.prototype.color='';
myCar.color='Eflatun';
console.log(myCar);         //car { name: 'Honda', carYear: 2011 }
console.log(myCar.age());   //12= 2023-2011
//console.log(myCar.carAge);   //12= 2023-2011
console.log(typeof myCar); //object
console.log(myCar.color);
/*
let myCar = new car();
myCar.name = 'Honda';
myCar.carYear=2011;
*/