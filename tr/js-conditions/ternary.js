// ternary oparetor (?):
​
// syntax: koşul ? true kolu: false kolu
​
let  trnryT = true ? 'true kolu': 'false kolu'
console.log(trnryT);
let  trnryF = false ? 'true kolu': 'false kolu'
console.log(trnryF);
// ​true kolu
// false kolu
​
//----------------------------------

let d = 10, e= 14;
let sonuc= d<e ? d+ ' küçüktür '+ e +' den' : e+ ' küçüktür '+ d +' den';
console.log(sonuc);
// 10 küçüktür 14 den

//----------------------------------

let w= 13;
let y= 5;
let z=7;
//             13<10 ? 5<10 ? 7<10 ?                               'wF'; 
let trnrySonuc= w<10 ? y<10 ? z<10 ? 'wTyTzT' : 'wTyTzF': 'wTyF' : 'wF'; 
console.log(trnrySonuc); // wF

//----------------------------------

let wi= 3;
let yi= 15;
let zi=7;
//                3<10 ? 15<10 ?  7<10 ?                      'wTyF'         
let trnrySonuci= wi<10 ? yi<10 ? zi<10 ? 'wTyTzT' : 'wTyTzF': 'wTyF' : 'wF'; 
console.log(trnrySonuci); // wTyF

//----------------------------------

let wii= 3;
let yii= 5;
let zii=17;
//                  3<10 ?   5<10 ?  17<10 ?            'wTyTzF'                       
let trnrySonucii= wii<10 ? yii<10 ? zii<10 ? 'wTyTzT' : 'wTyTzF': 'wTyF' : 'wF'; 
console.log(trnrySonucii); // wTyTzF

//----------------------------------

let wiii= 3;
let yiii= 5;
let ziii= 7;
//                   3<10 ?    5<10 ?   7<10   ? 'wTyTzT'                                 
let trnrySonuciii= wiii<10 ? yiii<10 ? ziii<10 ? 'wTyTzT' : 'wTyTzF': 'wTyF' : 'wF'; 
console.log(trnrySonuciii); // wTyTzT