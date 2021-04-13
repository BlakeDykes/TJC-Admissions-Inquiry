const stats = document.querySelector(".stats");
const rightColumn = document.querySelector(".col__right");

document.addEventListener('scroll', function(){
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    let rect = stats.getBoundingClientRect();
    if(window.scrollY + viewportHeight >= 1980 && viewportWidth > 983){
        const newHeight = window.scrollY + viewportHeight - 525;
        rightColumn.style.minHeight = newHeight + "px" ;
    }
    else{
        rightColumn.style.minHeight = "auto";
    }
});
