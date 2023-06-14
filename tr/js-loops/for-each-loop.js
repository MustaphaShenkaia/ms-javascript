// forEach()
​
//index         0     1     2     3
const letters4=['BB', 'FF', 'DD', 'EE'];
letters4.forEach(
    function(w){ // for(string w: iterableList) -- benzer
        console.log(w);
    }
)
/*
BB
FF
DD
EE
*/

//------------------------------------------

/*
forEach(); herbir key value cift için map teki değerleri girilen sirasi ile 
iterate ederek tek tek bize döner. 
*/
const cities7= new Map([
    //    key,       value
        ['istanbul',  34],
        ['Usak',      64],
        ['Bursa',     16],
        ['Ankara',     6],
    
]);

cities7.forEach(
    function(value, key){
        console.log(key + ' => ' +value);
    }
);
/*
istanbul => 34
Usak => 64
Bursa => 16
Ankara => 6
*/

//------------------------------------------

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
       x+=  key + ' => ' +value+ ' *** ';
    }
);
console.log(x);
​// istanbul => 34 *** Usak => 64 *** Bursa => 16 *** Ankara => 6 *** 