// forEach(); herbir key value cift için map teki değerleri girilen sırası ile iterate ederek tek tek bize döner. 
const cities7= new Map([
    //    key,       value
        ['istanbul',  34],
        ['Usak',      64],
        ['Bursa',     16],
        ['Ankara',     6],
    
]);
console.log(cities7);
// Map(4) { 'istanbul' => 34, 'Usak' => 64, 'Bursa' => 16, 'Ankara' => 6 }

cities7.forEach( (value, key) => {
    console.log(key + ' => ' +value);
});
/*
istanbul => 34
Usak => 64
Bursa => 16
Ankara => 6
*/ 

//--------------------------------------------------

const cities8= new Map([
    //    key,       value
        ['istanbul',  34],
        ['Usak',      64],
        ['Bursa',     16],
        ['Ankara',     6],
    
]);
let x='';
cities8.forEach(
    function(value, key){
       x+=  key + ' => ' + value+ ' *** ';
    }
);
console.log(x);
// istanbul => 34 *** Usak => 64 *** Bursa => 16 *** Ankara => 6 *** 