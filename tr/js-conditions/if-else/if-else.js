//conditional statements
// if/else statments
let saat= new Date().getHours();
console.log(saat);//10

if(saat<20){
    console.log('İyi günler');
}
// İyi günler

//----------------------------

let saat2= new Date().getHours();

if(saat2<20){
    console.log('İyi günler');
}else{
    console.log('İyi akşamlar');    
}

//----------------------------

// if else if statement
let saat3= new Date().getHours();
//let saat3= 10;
if(saat3<12){
    console.log('İyi sabahlar');
}else if(saat3<20){
    console.log('İyi günler');    
}else{
    console.log('iyi akşamlar');
}

//----------------------------

// perfect even, perfect odd, good even, good odd
​
let a=2013;

if(a%2==0){
    if(a%3==0){
        console.log(a+ ' mükkemel çift sayi');
    }else{
        console.log(a+ ' iyi çift sayi');
    }
   
}else{
    if(a%3==0){
        console.log(a+ ' mükkemel tek sayi');
    }else{
        console.log(a+ ' iyi tek sayi');
    }
}
// 2013 mükkemel tek sayi