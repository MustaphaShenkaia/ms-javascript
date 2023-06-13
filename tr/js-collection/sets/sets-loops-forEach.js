//forEach():  set in herbir elemanini tek tek alir ve istenilen işlemde kullanir.​
const numbersE= new Set([7, 2, 5, 3]);
numbersE.forEach(
    function(w) {
    console.log(w);
})
​
//-----------------------------

const numbersF= new Set([7, 2, 5, 3]);
numbersF.forEach(
    function(w) {
    w+=w;
    console.log(w);
})

//-----------------------------

let songs = [
    'Erkin Koray öyle bir geçer zaman ki', 
    'fesubhanallah',  
    'şaşkin', 
    'Modern talking - brother lui ', 
    'Amir Ateş = Bir kizil goncaya benzer dudağin'
];

const favoriteSongs = new Set(songs);
// console.log(favoriteSongs);

favoriteSongs.forEach((s) => {
    console.log('Çalinan Şarki : '+ s);
    console.log(s + 'Şarki Sözleri ' );
});

//-----------------------------

const shoppingCart= new Set([
    { name: 'Telefon',      price:  10000},
    { name: 'Bilgisayar',   price:  20000},
    { name: 'Klavye',       price:  400  }
]);

//console.log(shoppingCart);

let TotalPrice=0;

shoppingCart.forEach((w) => {
    console.log('Ürün: '+ w.name + ', Fiyat: '+ w.price+ ' TL');
    TotalPrice+=w.price;
});

console.log('Toplam Fiyat: '+ TotalPrice + ' TL');

//-----------------------------