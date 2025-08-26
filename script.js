function getElement(id){
   const idValue = document.getElementById(id);
   return idValue;
}

getElement('card-box').addEventListener('click', function(e){
    if(e.target.className.includes('card-btn')){
      
    }
    
})