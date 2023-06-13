
// add()
const numbersB= new Set([7, 2, 5, 3]);
numbersB.add(1);
console.log(numbersB);//Set(5) { 7, 2, 5, 3, 1 }

//----------------------------

// delete(): verilen element i siler.​
const numbersC= new Set([7, 2, 5, 3]);
numbersC.delete(2);
console.log(numbersC);//Set(3) { 7, 5, 3 }

//----------------------------

//has()
const numbersD= new Set([7, 2, 5, 3]);
console.log(numbersD.has(2));//true
console.log(numbersD.has(4));//false