// for of 
​
const cities9= new Map([
    //    key,       value
        ['istanbul',  34],
        ['Usak',      64],
        ['Bursa',     16],
        ['Ankara',     6],
    
]);

for(const w of cities9.entries()){
    console.log(w);
}
/*
[ 'istanbul', 34 ]
[ 'Usak', 64 ]
[ 'Bursa', 16 ]
[ 'Ankara', 6 ]
*/

//-------------------

// for(string w: stringMap)
const cities10= new Map([
    //    key,       value
        ['istanbul',  34],
        ['Usak',      64],
        ['Bursa',     16],
        ['Ankara',     6],
    
]);

let metin='';

for(const w of cities10.entries()){
    metin += w + ' ** ';
}
console.log(metin); //istanbul,34 ** Usak,64 ** Bursa,16 ** Ankara,6 ** 

//-------------------

const cities11= new Map([
    //    key,       value
        ['istanbul',  34],
        ['Usak',      64],
        ['Bursa',     16],
        ['Ankara',     6],
    
]);

for(const [key, value] of cities11.entries()){
    console.log('key '  + key);
    console.log('value '+ value);
}

//-------------------

const cities12= new Map([
    //    key,       value
        ['istanbul',  34],
        ['Usak',      64],
        ['Bursa',     16],
        ['Ankara',     6],
]);

let valueMetin= '';

for(const w of cities12.values()){
    valueMetin+= w+ ' ** ';
    console.log(w);
}
console.log(valueMetin); 
//34 ** 64 ** 16 ** 6 ** 

//-------------------------

const menu = new Map([
    ['Pide',    50],
    ['Corba',   25],
    ['Kofte',   75],
    ['Kokorec', 50]
])
//console.log(menu);
for(const [yemek, fiyat] of menu.entries()){
    console.log(`${yemek}: ${fiyat}₺`);
}
//alt + 96 
/*
Pide: 50₺
Corba: 25₺
Kofte: 75₺
Kokorec: 50₺
*/