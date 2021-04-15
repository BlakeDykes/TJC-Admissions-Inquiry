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

/*
console.log(header);
console.log("headerHeight - " + headerHeight);
console.log("admnHeaderHeight - " + admHeaderHeight);
console.log("rightColumnHeight - " + rightColumnHeight);
console.log("rightColumnActual - " + rightColumnActualHeight);
*/

document.addEventListener('scroll', function(){
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    
    let rect = stats.getBoundingClientRect();
    if(viewportHeight + window.scrollY >= rightColumnHeight + scrollPadding && viewportWidth > 1082 && viewportWidth < 1273){
        if(rightColumnActualHeight + ((viewportHeight + window.scrollY) - rightColumnHeight) < 2083 + scrollPadding){
            rightColumn.style.minHeight = rightColumnActualHeight + ((viewportHeight + window.scrollY) - rightColumnHeight) - scrollPadding  + "px" ;
        }
        else if(rightColumnActualHeight + ((viewportHeight + window.scrollY) - rightColumnHeight) > 2083 + scrollPadding){
            rightColumn.style.minHeight = 2083  + "px" ;
        }
    }
    else if(viewportHeight + window.scrollY >= rightColumnHeight + scrollPadding && viewportWidth > 1082){
        if(rightColumnActualHeight + ((viewportHeight + window.scrollY) - rightColumnHeight) < 2099 + scrollPadding){
            rightColumn.style.minHeight = rightColumnActualHeight + ((viewportHeight + window.scrollY) - rightColumnHeight) - scrollPadding  + "px" ;
        }
        else if(rightColumnActualHeight + ((viewportHeight + window.scrollY) - rightColumnHeight) > 2099 + scrollPadding){
            rightColumn.style.minHeight = 2099  + "px" ;
        }
    }
    else if(viewportWidth < 1082 && viewportWidth > 508){
        rightColumn.style.minHeight = "1560px";
    }
    else if(viewportWidth < 508){
        rightColumn.style.minHeight = "1325px"
    }
    
});

$('.carousel').carousel({
    interval: 1000 * 15
})



