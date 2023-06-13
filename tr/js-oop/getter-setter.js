class kisi {

    constructor(ad, yas){
        this._ad=ad; // _ protected.
        this._yas=yas;
    }

     get getAd(){
         return this._ad;
     }

     get getYas(){
         return this._yas;
     }

     setAd(yeniAd){
        this._ad=yeniAd;
        return this._ad;
     }

     setYas(yeniYas){
        if (typeof yeniYas==='number' && yeniYas>0){
            this._yas=yeniYas;
        }else{
            console.log('geçersiz yas girişi');
        }
     }
}

let myKisi= new kisi('Ahmet', 25);
console.log(myKisi.getAd);
console.log(myKisi.getYas);
myKisi.setAd('Mehmet');
myKisi.setYas(30);
console.log(myKisi.getAd);
console.log(myKisi.getYas);