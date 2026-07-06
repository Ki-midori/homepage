window.addEventListener("scroll",function(){
    const target = document.querySelector("video");
    const offset = window.pageYOffset;
    target.style.transform = 'translateY(${offset * 0.3}px)';
});