
// Static keyword
class car3 {

    constructor(name){
        this.carName=name;
    }

    hello(){
        return 'Ben static değilim, instance  üzerinden bana ulaşabilirsiniz.';
    }

    static merhaba(){
        return 'Ben static bir function im, className.MethodName ile bana ulaşabilirsiniz.'
    }
}

console.log(car3.merhaba()); 
//Ben static bir function ım, className.MethodName ile bana ulaşabilirsiniz.

let myCar3 = new car3();// nonStatic function için object oluşturmalısınız.
console.log(myCar3.hello()); //Ben static değilim, instance  üzerinden bana ulaşabilirsiniz.
//function öncesine herhangi bir şey yazılmazsa default olarak non-static tir. 
