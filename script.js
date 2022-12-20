function onayla(){
    
    const siparisbilgileriHucreleri = document.querySelectorAll('.siparisBilgileri');
   
    const siparisbilgileri = document.querySelectorAll('.siparis-input')

    tabloyaBilgiEkle(siparisbilgileriHucreleri,siparisbilgileri)


}


function tabloyaBilgiEkle(cell,data){

    for (let i = 0; i < data.length; i++) {
            
        cell[i].innerHTML =data[i].value
        
    }

}