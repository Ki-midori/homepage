document.addEventListener('scroll',() =>{
    const slideElements=document.querySelectorAll('.syokai');
    const windowHeight=window.innerHeight;
    slideElements.forEach((element) => {
        const rect=element.getBoundingClientRect();

        if (rect.top<windowHeight && rect.bottom>=0){
            element.classList.add('visible');
        }
    });

});