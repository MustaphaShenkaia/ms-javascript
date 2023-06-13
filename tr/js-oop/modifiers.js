// APEX te public, private, protected JavaScript te de mevcuttur. 
// # private yapmak için class yada function ın başına eklenir. 
// _ protected yapmak için class yada function ın başına eklenir.
//static static yapmak için class yada function ın başına eklenir.

class car4{

    publicOzellik=10;
    #privateOzellik=20;

    constructor(name, year){
        this.name   =name;
        this.carYear=year;
    }
    
    age(){                             
        let cy = new Date().getFullYear(); 
        let result= cy - this.carYear;
        return result;
    }

    #privateAge(){                             
        let cy = new Date().getFullYear(); 
        let result= cy - this.carYear;
        return result;
    }

    getPrivateAge(){
        console.log(this.publicOzellik      + ' ben public özellik değeriyim');
        console.log(this.#privateOzellik    + ' ben private özellik değeriyim');
        console.log(this.#privateAge()      + ' ben private function sonucuyum');
    }
}
let myCar4 = new car4('Honda', 2011);
//console.log(myCar4.publicOzellik);
//console.log(myCar4.privateOzellik); //Private field 
//console.log(myCar4.age());
console.log(myCar4.getPrivateAge());
