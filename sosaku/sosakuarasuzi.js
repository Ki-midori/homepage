document.addEventListener('scroll',() =>{
    const headings=document.querySelectorAll('h3');
    const windowHeight=window.innerHeight;
    headings.forEach((heading) => {
        const rect=heading.getBoundingClientRect();

        if (rect.top<windowHeight && rect.bottom>=0){
            heading.classList.add('visible');
        }
    });

});