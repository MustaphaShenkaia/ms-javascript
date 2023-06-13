// get (key); verilen key e ait valu yu getirir.
const cities3 = new Map([
  //    key,       value
    ['istanbul',  34],
    ['Usak',      64],
    ['Bursa',     16],
    ['Ankara',     6]
])
console.log(cities3.get('Ankara')); //6

//------------------------------

// has(key); verilen key e ait verinin olup olmadığını true ve false olarak döner. 
const cities4 = new Map([
    //    key,       value
      ['istanbul',  34],
      ['Usak',      64],
      ['Bursa',     16],
      ['Ankara',     6]
  ])
  console.log(cities4.has('Ankara'));//true
  console.log(cities4.has('Nevşehir')); //false

  //------------------------------

// delete(key); verilen key ve value değeri silinir.
const cities5 = new Map([
    //    key,       value
      ['istanbul',  34],
      ['Usak',      64],
      ['Bursa',     16],
      ['Ankara',     6]
  ])
  console.log(cities5);
  //Map(4) { 'istanbul' => 34, 'Usak' => 64, 'Bursa' => 16, 'Ankara' => 6 }
  cities5.delete('Ankara');
  //Map(3) { 'istanbul' => 34, 'Usak' => 64, 'Bursa' => 16 }
  console.log(cities5);

    //------------------------------

// size ; map in sahip olduğu key-value pair adedini gösterir.
const cities6 = new Map([
    //    key,       value
      ['istanbul',  34],
      ['Usak',      64],
      ['Bursa',     16],
      ['Ankara',     6]
  ])
  console.log(cities6.size); //4

  