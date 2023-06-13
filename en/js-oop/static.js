//Static Keyword: Static methods are defined on the class itself. 
//you cannot call static method by refering objects. 

class std {
    fName;
    lName;
    age;

    constructor(nm, ln, g) {
        this.fName = nm; 
        this.lName= ln; 
        this.age = g; 
    }

    static welcome() {
        return `Welcome to our home...`; 
    }

    hello() {
        return `Hello ${this.fName}`
    }
}

const std1 = new std('Yener', 'Celikbag', 20); 
console.log(std1.hello()); //Hello Yener

const std2 = new std("Basak", "D", 18); 
console.log(std2.hello()); //Hello Basak
console.log(std.welcome()) ;  //Welcome to our home...
console.log(std.welcome()) // We were not able reach welcome method by std1 (object)