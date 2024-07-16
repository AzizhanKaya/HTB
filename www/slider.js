function initializeELements(){

    let items = document.querySelectorAll('.item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    active = 1;
    function loadShow(){
        
        items[active].style.transform = `none`;
        items[active].style.zIndex = 1;
        items[active].style.filter = 'none';
        items[active].style.opacity = 1;
        for(var i = active + 1; i < items.length; i++){
            items[i].style.transform = `translateX(${95*(i-active)}%) scale(0.8) perspective(70vw) rotateY(45deg) `;
            items[i].style.zIndex = -(i-active);
            items[i].style.filter = 'blur(1px)';
            items[i].style.opacity = (i-active) > 1 ? 0 : 0.6;
        }
        
        for(var i = active - 1; i >= 0; i--){
            
            items[i].style.transform = `translateX(${95*(i-active)}%) scale(0.8) perspective(70vw) rotateY(-45deg) `;
            items[i].style.zIndex = -(active-i);
            items[i].style.filter = 'blur(1px)';
            items[i].style.opacity = (active-i) > 1 ? 0 : 0.6;
        }
    }
    loadShow();
    next.onclick = function(){
        active = active + 1 < items.length ? active + 1 : 0;
        
        loadShow();
    }
    prev.onclick = function(){
        active = active >= 1 ? active - 1 : items.length-1;
        loadShow();
    }
}


document.addEventListener('itemsLoaded', initializeELements);