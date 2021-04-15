$(document).ready(function(){
    $(this).scrollTop(0);
});


const stats = document.querySelector(".stats");
const rightColumn = document.querySelector(".col__right");
const testimonials = document.querySelectorAll(".testimonial");
const admHeader = document.querySelector(".adm__header");
const header = document.querySelector(".header");

const headerHeight = header.getBoundingClientRect().bottom;
const admHeaderHeight = admHeader.getBoundingClientRect().bottom - headerHeight;
const rightColumnHeight = rightColumn.getBoundingClientRect().bottom;
let rightColumnActualHeight = rightColumnHeight - headerHeight - admHeaderHeight - 120 - 2;
let scrollPadding = 50;

document.addEventListener('scroll', function(){
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    console.log("viewport-height: " + viewportHeight + " scroll-height: " + scrollY);
    
    let rect = stats.getBoundingClientRect();
    if(viewportHeight + window.scrollY >= rightColumnHeight + scrollPadding && viewportWidth > 1082 && viewportWidth < 1273){
        if(rightColumnActualHeight + ((viewportHeight + window.scrollY) - rightColumnHeight) < 2105 + scrollPadding){
            rightColumn.style.minHeight = rightColumnActualHeight + ((viewportHeight + window.scrollY) - rightColumnHeight) - scrollPadding  + "px" ;
        }
        else if(rightColumnActualHeight + ((viewportHeight + window.scrollY) - rightColumnHeight) > 2090 + scrollPadding){
            rightColumn.style.minHeight = 2090  + "px" ;
        }
    }
    else if(viewportHeight + window.scrollY >= rightColumnHeight + scrollPadding && viewportWidth > 1082){
        if(rightColumnActualHeight + ((viewportHeight + window.scrollY) - rightColumnHeight) < 2105 + scrollPadding){
            rightColumn.style.minHeight = rightColumnActualHeight + ((viewportHeight + window.scrollY) - rightColumnHeight) - scrollPadding  + "px" ;
        }
        else if(rightColumnActualHeight + ((viewportHeight + window.scrollY) - rightColumnHeight) > 2105 + scrollPadding){
            rightColumn.style.minHeight = 2105  + "px" ;
        }
    }
    else if(viewportWidth < 1082 && viewportWidth > 508){
        rightColumn.style.minHeight = "1475px";
    }
    else if(viewportWidth < 508){
        rightColumn.style.minHeight = "1250px"
    }
    
});

$('.carousel').carousel({
    interval: 1000 * 15
})



