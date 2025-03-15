function QS(query) { return document.querySelector(query); } 
function QSA(query) { return document.querySelectorAll(query); }
function S(element) { return element.style; }

// bgColor header change on name click

const HEADER_NAME = QS("header > h2");
let headerClicked = false;

HEADER_NAME.addEventListener("click", () => 
{
    const HEADER_BACKGROUND = QS(".header-background");
    headerClicked = !headerClicked;

    if(headerClicked)
    {
        S(HEADER_BACKGROUND).inset = "0";
        S(HEADER_BACKGROUND).opacity = ".1";
    }

    else
    {
        S(HEADER_BACKGROUND).inset = "0 100% 0 0";
        S(HEADER_BACKGROUND).opacity = "0";
    }
});

// h1 fade in

window.onload = () => 
{
    const HEADER_H1 = QS("header > h1");

    setTimeout(() => 
    {
        S(HEADER_H1).opacity = "1";
        S(HEADER_H1).marginTop = "0";
    }, 500);
};

// border fade in on scroll

document.addEventListener("scroll", () => 
{
    const HEADER = QS("header");
    let scrollY = window.scrollY + window.innerHeight;

    if(scrollY >= window.innerHeight + 50)
    {
        S(HEADER).borderBottomColor = "white";
    }
    else if(scrollY < window.innerHeight + 50)
    {
        S(HEADER).borderBottomColor = "transparent";
    }
});

// nav animation

const HAMBURGER = QS(".hamburger");
const HAMBURGER_DIV = QSA(".hamburger > div");
const NAV_CONTENT = QS(".nav-content");
const NAV_CONTENT_SPAN = QSA(".nav-content > span");
let hamburgerClicked = false;

function appearNavContentSpan()
{
    setTimeout(() => 
    {
        NAV_CONTENT_SPAN.forEach(element => 
        {
            S(element).opacity = "1";
        });
    }, 500);
}
function disappearNavContentSpan()
{
    NAV_CONTENT_SPAN.forEach(element => 
    {
        S(element).opacity = "0";
    });
}

HAMBURGER.addEventListener("click", () => 
{
    hamburgerClicked = !hamburgerClicked;

    if(hamburgerClicked)
    {
        HAMBURGER_DIV[0].classList.add("hamburger-animation-1");
        S(HAMBURGER_DIV[1]).opacity = "0";
        HAMBURGER_DIV[2].classList.add("hamburger-animation-2");
        S(HAMBURGER).rotate = "180deg";
        appearNavContentSpan();
        S(NAV_CONTENT).visibility = "visible";
        S(NAV_CONTENT).opacity = "1";
    }

    else
    {
        HAMBURGER_DIV[0].classList.remove("hamburger-animation-1");
        S(HAMBURGER_DIV[1]).opacity = "1";
        HAMBURGER_DIV[2].classList.remove("hamburger-animation-2");
        S(HAMBURGER).rotate = "0deg";
        disappearNavContentSpan();
        S(NAV_CONTENT).visibility = "hidden";
        S(NAV_CONTENT).opacity = "0";
    }
});