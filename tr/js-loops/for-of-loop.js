// for of-loop: 
​
//index         0     1     2     3
const letters2=['BB', 'FF', 'DD', 'EE'];

for(let w of letters2){
    // => for (string w : list) benzer -- for each loop
    console.log(w);   
    // => for (string w : map.values()) benzer -- for each loop
}
/*
BB
FF
DD
EE
*/

//--------------------

const cities12= new Map([
    //    key,       value
        ['istanbul',  34],
        ['Usak',      64],
        ['Bursa',     16],
        ['Ankara',     6],
]);

for(const w of cities12.keys()){
    console.log(w);
}
/*
istanbul
Usak
Bursa
Ankara
*/

//--------------------

const cities13= new Map([
    //    key,       value
        ['istanbul',  34],
        ['Usak',      64],
        ['Bursa',     16],
        ['Ankara',     6],
]);

for(const w of cities13.values()){
    console.log(w)
}
/*
34
64
16
6
*/

//---------------------

const person3= {
    firstName: 'Ahmet',
    lastName : 'Yilmaz',
    age      : 33
}
for( let w of person3){ 
    //person3 is not iterable
    console.log(w);
}

//---------------------

let text= 'merhaba';
for( let w of text){ 
    console.log(w);
}
/*
m
e
r
h
a
b
a
*/