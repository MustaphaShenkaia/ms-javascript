// JavaScript Sets
// unique elemenlardan oluşur. tekrarlayan elemanlari 
// APEX te ascci ye göre siralar ama JS Set ler elemanlarini siralamaz. 
​
const numbers = new Set();
numbers.add(7);
numbers.add(7);
numbers.add(2);
numbers.add(5);
numbers.add(3);
numbers.add(5);
console.log(numbers);
//Set(4) { 7, 2, 5, 3 }

//----------------------------

// typeof
const numbersA= new Set([7, 2, 5, 3]);
console.log(numbersA);//Set(4) { 7, 2, 5, 3 }
console.log(typeof numbersA);//object







