// switch statement 
​
// herbir koşulu değerlendirir ve bulduğunda break ile satir okuma süreci kirilir ve switch{ } blogu dişina çikilir. 
//pazar 0, pazartesi 1, sali 2... cumartesi 6
let gun = new Date().getDay(); // haftanin kaçinci günü olduğunu döner. 
console.log(gun);

switch (gun) {
    case 0:
        console.log('Pazar');
        break;

    case 1:
        console.log('Pazartesi');
        break;

    case 2:
        console.log('Sali'); 
        break;    

    case 3:
        console.log('Çarşamba');
        break;  

    case 4:
        console.log('Perşembe');
        break;  
    
    case 5:
        console.log('Cuma');
        break; 

    case 6:
        console.log('Cumartesi');
        break; 
        

    default:
        console.log('Lütfen gün sayisini doğru giriniz.');
        break;
}


//----------------------------------------------


// switch === strictly equals ise çalişir. 

let b= '11';

switch (b) {
    case 11:
        console.log('losely equals');
        break;

    case '11':
        console.log('strictly equals'); //strictly equals
        break;

        
    default:
        console.log('not equals'); 
        break;
}


//----------------------------------------------


let c = true;

switch(c){
    case 1:
        console.log('losely equals');
    break;
    
    case true:
        console.log('strictly equals'); //strictly equals
    break;
    
    default:
        console.log('not equals'); 
}