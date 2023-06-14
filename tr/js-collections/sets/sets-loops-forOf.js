// values(): Set teki bütün value ları içeren yeni bir iterator object oluşturur. 

const numbersG= new Set([7, 2, 5, 3]);
//console.log(numbersG.values());//[Set Iterator] { 7, 2, 5, 3 }
for( const w of numbersG.values()){// APEX --> for(integer w: Map.values()) benzeri
    console.log(w);
}
​
//-----------------------------------------------------------

/*
Js te farklı veri yapıları üzerinde döngü ile çalışmanın genel bir yolu iterator ile sağlanır. 
Array, map ve set gibi veri yaıları iterator nesnesini döndürür. 
​*/

const numbersH= new Set([7, 2, 5, 3]);

for( const w of numbersH.values()){
    let a= w+w ;
    console.log(a);
}