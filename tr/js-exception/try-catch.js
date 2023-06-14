​
// TRY CATCH 
​
try{
    let sonuc= 10/0;
    console.log(sonuc); //Infinity

}catch(error){
    console.log(error.message); //Infinity
}

//---------------------------

var obj= {
    name: 'Ahmet'
}
​
try{
    console.log('name '+ obj.name); // Ahmet
    console.log('age ' + obj.age );

} catch(error){
    console.log('Hata mesaji'+ error.message); //undefined
}

//---------------------------

// custom error.
function bolme(a,b){
    if(b===0){
        throw new Error('Sifira bölme hatasi: paydadaki değer sifir olamaz.');
    }
    return a/b;
}
//console.log(bolme(10,0));

try{
    let sonuc= bolme(10,1);
    console.log('Sonuc:'+ sonuc);//Sonuc:10 --> 10/1
}catch(error){
    console.log('Hata mesaji '+ error.message); 
    // 10/0 -->Hata mesaji Sifira bölme hatasi: paydadaki değer sifir olamaz.
}
// Sonuc:10

//---------------------------

try{
    var sayi = -15;
    if(sayi<0){
        throw new Error('sayi, sifir dan küçük olamaz.');
    }
    console.log('sayi :'+ sayi);

}catch (error){
    console.log( 'Hata Mesaji '+ error.message)
} 
//Hata Mesaji sayi, sifir dan küçük olamaz.

//---------------------------

try{
    var sayi = -15;
    if(sayi<0){
        throw new Error('sayi, sifir dan küçük olamaz.');
    }
    console.log('sayi :'+ sayi);
}catch (error){
    console.log( 'Hata Mesaji '+ error.message)
} 
//Hata Mesaji sayi, sifir dan küçük olamaz.