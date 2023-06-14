//JavaScript Maps
​
// key, valu eşleşmesi şeklinde entry leri tutar. key ler herhangi bir data type olabilir.
// key unique olmak zorundadır. 
​
// 1. map oluşturma method 
const cities = new Map();
console.log(cities);
//Map(0) {}

//           key,       value
cities.set('istanbul',  34); // set methodu ile veri ekliyoruz.
cities.set('Usak',      64);
cities.set('Bursa',     16);
cities.set('Ankara',     6);
console.log(cities); 
//Map(4) { 'istanbul' => 34, 'Usak' => 64, 'Bursa' => 16, 'Ankara' => 6 }

//--------------------------------------------------

// 2. map oluşturma method 
const citiess = new Map([
 //    key,       value
    ['istanbul',  34],
    ['Usak',      64],
    ['Bursa',     16],
    ['Ankara',     6],
])
console.log(citiess);
// Map(4) { 'istanbul' => 34, 'Usak' => 64, 'Bursa' => 16, 'Ankara' => 6 }
    ​