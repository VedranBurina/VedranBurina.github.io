// header change on scroll, bubbles follow cursor, h1 animation

const header = document.getElementsByTagName("header")[0];

const bubble1 = document.querySelector(".bubble-1");
const bubble2 = document.querySelector(".bubble-2");

const firstHalf = document.querySelector(".first");
const secondHalf = document.querySelector(".second");

const headerH1 = document.querySelector(".header-text-holder > h1");
const spans = document.querySelectorAll('.header-text-holder > h1 > span');

// footer 
const footer = document.getElementsByTagName("footer")[0];

headerH1.addEventListener("mouseover", () => {
    spans.forEach((span, index) => {
        span.style.animation = "h1-animate .3s ease forwards";
        span.style.color = "#7c0042";
        const notLinearDelay = Math.sqrt(index) * 0.07;
        span.style.animationDelay = `${notLinearDelay}s`; 
    });
});

headerH1.addEventListener("mouseleave", () => {
    const spansReversedArray = Array.from(spans).reverse();

    spansReversedArray.forEach((span, index) => {
        span.style.animation = "h1-unanimate .3s ease forwards"
        span.style.color = "var(--footer-bg-color)";
        const notLinearDelay = Math.sqrt(index) * 0.07;
        span.style.animationDelay = `${notLinearDelay}s`;
    });
});

document.addEventListener("scroll", () => {
    let distanceToFirstHalf = parseInt(getComputedStyle(header).height, 10) + 80;
    let distanceToSecondHalf = parseInt(getComputedStyle(header).height, 10) + parseInt(getComputedStyle(firstHalf).height, 10) + 80;
    let distanceToFooter = parseInt(getComputedStyle(header).height, 10) + parseInt(getComputedStyle(firstHalf).height, 10) + parseInt(getComputedStyle(secondHalf).height, 10) + 80;
    let scrollY = window.scrollY + window.innerHeight;

    if(scrollY > distanceToFirstHalf && scrollY <= distanceToSecondHalf)
    {
        header.classList.add("header-on-scroll");

        firstHalf.style.marginBottom = "115px";
    }

    else if(scrollY > distanceToSecondHalf && scrollY < distanceToFooter) {
        firstHalf.style.marginBottom = "0";
        
        // footer
        secondHalf.style.marginBottom = "300px";
    }

    else if(scrollY > distanceToFooter && scrollY > distanceToSecondHalf)
    {

        // footer
        secondHalf.style.marginBottom = "150px";
    }

    else
    {
        header.classList.remove("header-on-scroll");
    }
});

header.addEventListener("mousemove", (event) => {
    let bubble1XMovement = event.clientX * 0.15;
    let bubble1YMovement = event.clientY * 0.17;

    let bubble2XMovement = event.clientX * 0.17;
    let bubble2YMovement = event.clientY * 0.15;

    bubble1.style.left = (event.clientX > 120) ? 120 + bubble1XMovement + "px" : 120 - bubble1XMovement + "px";
    bubble1.style.top = (event.clientY > 190) ? 190 + bubble1YMovement + "px" : 190 - bubble1YMovement + "px";

    bubble2.style.left = (event.clientX > 190) ? 190 + bubble2XMovement + "px" : 190 - bubble2XMovement + "px";
    bubble2.style.top = (event.clientY > 100) ? 100 + bubble2YMovement + "px" : 100 - bubble2YMovement + "px";
});


// footer take me to top button

const arrowToTop = document.querySelector(".arrow-to-top");

arrowToTop.addEventListener("click", () => {
    const realArrowToTop = document.querySelector(".arrow-to-top > svg");
    
    const clonedArrow = realArrowToTop.cloneNode(true);
    arrowToTop.replaceChild(clonedArrow, realArrowToTop);
    
    clonedArrow.style.animation = "arrow-movement-1 1s linear, arrow-movement-2 .8s 1s linear, arrow-movement-2 .6s 1.8s linear, arrow-movement-2 .4s 2.4s linear, arrow-movement-3 .2s 2.8s linear";
    
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 2900);
});





