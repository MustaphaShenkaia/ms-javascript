// for in-loop : for (in) loop 
​
// arraylarin indexlerini dönüyor. 

//index         0     1     2     3
const letters=['BB', 'FF', 'DD', 'EE'];

for(let w in letters){
    // => for (string w : keyset()) benzer -- in: index.... gibi
    console.log(w); // 0 1 2 3
    console.log(letters[w]); //'BB', 'FF', 'DD', 'EE'
}

//--------------------------------------

const person= {
    firstName: 'Ahmet',
    lastName : 'Yilmaz',
    age      : 33
}

for( let w in person){
    console.log(w);
}
/*
firstName
lastName
age
*/

//------------------

const person2= {
    firstName: 'Ahmet',
    lastName : 'Yilmaz',
    age      : 33
}

for( let w in person2){
    console.log(person2[w]);
}
/*
Ahmet
Yilmaz
33
*/