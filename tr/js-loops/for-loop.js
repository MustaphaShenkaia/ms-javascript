// loops 
// for-loop()
// dikkat!!! arrtirma veya azaltma olmadiğinda sonsuz döngüye girilir. 
// 1 tanimla,    2 değerlendir     4 arttir
for(let i=1;     i<11;             i++){ // 3 uygula
    console.log('sayi '+ i);
}
​
​//-------------------------------------------------

for(let i=0;     i<101;             i+=5){ // 3 uygula
    console.log('sayi '+ i);
}
​
//-------------------------------------------------

let j=100;
for(let j=0; j<11; j+=2){
    console.log(j);
}
console.log(j +' 100 ise scope dişindan  10 ise scope içinden ');
//           100 100 ise scope dişindan  10 ise scope içinden 

//-------------------------------------------------

var k=100;

for (let k=0; k<11; k+=2) {
    console.log(k);    
}
console.log(k +' 100 ise scope dişindan  10 ise scope içinden ');
//           12 100 ise scope dişindan  10 ise scope içinden
// var block scope değildir ondan sonucu en son aldiği değer olan 12 olarak gösterdi.   
​