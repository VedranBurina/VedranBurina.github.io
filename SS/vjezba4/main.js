const QS = (query) => document.querySelector(query);
const QSA = (query) => document.querySelectorAll(query); 
const S = (element) => element.style;

// igra

const igraButton = QS(".igra");
const closeIgra = QS(".close-igra");
const igraProgress = QS(".igra-progress");
const options = QS(".options");
const upperBounds = QSA(".options > span");
let upperBound;
let randNumber;
let intervalCounter;

function changeBgClr() 
{
    let randomClr = Math.round(Math.random() * 55);
    let randomClr2 = Math.round(Math.random() * 55);
    S(igraProgress).backgroundColor = `rgb(${randomClr}, ${randomClr}, ${randomClr})`;
    let timeout = setTimeout(() => { S(igraProgress).backgroundColor = `rgb(${randomClr2}, ${randomClr2}, ${randomClr2})` }, 200);
    intervalCounter += 400;
    if(intervalCounter == 4000) 
    {
        S(igraProgress).backgroundColor = "#1c1c1c";
        clearTimeout(timeout);
        clearInterval(changeBgClrInterval);
    }
}
let changeBgClrInterval;

igraButton.addEventListener("click", () => 
{ 
    document.body.style.overflowY = "hidden"; 
    S(igraProgress).display = "flex"; 
    S(options).display = "inline-block";
});
closeIgra.addEventListener("click", () => { S(igraProgress).display = "none"; document.body.style.overflowY = "scroll"; })

upperBounds.forEach(span => 
{
    span.addEventListener("click", () => {
        upperBound = parseFloat(span.textContent, 10);
        randNumber = Math.round(Math.random() * upperBound);
        igra();
    })
});

function igra()
{
    intervalCounter = 0;
    S(options).display = "none";
    let prompt = window.prompt("Pogodite broj.", "broj");

    if(isNaN(prompt)) 
    {
        window.alert("Neispravan unos.");
        S(options).display = "inline-block";
    }

    else if(prompt == null) S(options).display = "inline-block";

    else
    {
        if(prompt > randNumber)
        {
            window.alert("Pre veliki broj.");
            igra();
        }

        else if(prompt < randNumber)
        {
            window.alert("Pre mali broj.");
            igra();
        }

        else if(prompt == randNumber)
        {
            S(options).display = "inline-block";
            window.alert(`Uspješno ste pogodili broj.
            Broj je bio ${ randNumber }.`); 
            changeBgClrInterval = setInterval(changeBgClr ,400);
        }
    }
}

// osvjezavanje stranice, vracanje na prethodno otvorenu stranicu, kolacici

const osvjezi = QS(".osvjezi");
osvjezi.addEventListener("click", () => { location.reload(); });

const prethodnaStr = QS(".prethodna-str");
prethodnaStr.addEventListener("click", () => { history.back(); });

const kolacici = QS(".kolacici");
kolacici.addEventListener("click", () => 
{ 
    if(!navigator.cookieEnabled) window.alert ("Ne koriste se kolačići."); 
    else window.alert("Koriste se kolačići.")
});

// sport

let sportArray = [];
let igracaArray = [];
const sport = QS(".sport");
const sportForm = QS(".sport-form");
const closeSport = QS(".close-sport");
const upisi = QS(".upisi");

sport.addEventListener("click", () => { document.body.style.overflowY = "hidden"; S(sportForm).display = "flex"; });
closeSport.addEventListener("click", () => { document.body.style.overflowY = "scroll"; S(sportForm).display = "none"; });

upisi.addEventListener("click", (textClr, textSize, bgImage) =>
{
    const sportInput = QSA(".sport-input > input");
    const igracaInput = QSA(".igraca-input > input");
    
    for(let i = 0; i < 6; i++)
    {
        sportArray[i] = sportInput[i].value;
        igracaArray[i] = igracaInput[i].value;
    }
    sportArray.sort();
    igracaArray.sort();

    let polje1 = sportArray.join(", ");
    let polje2 = igracaArray.join(", ");
    let polje3 = sportArray.concat(igracaArray).join(", ");

    textClr = QS('input[type="color"]').value;
    textSize = QS('input[type="number"]').value;
    bgImage = "bg.jpg";

    let randName = `Podaci ${Math.random()}`;
    let newWindow = window.open("", randName, `width=${window.screen.width}, height=${window.screen.height}`);

    let content = `
    <html>
        <head>
            <title>Podaci</title>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                }
                body {
                    background-image: url("${bgImage}");
                    background-position: center center;
                    background-attachment: fixed;
                    background-size: cover;
                    background-repeat: no-repeat;
                }
                p {
                    background-color: rgba(255, 255, 255, .5);
                    padding: 30px;
                    color: ${textClr};
                    font-size: ${textSize};
                    font-family: monospace;
                }
            </style>
        </head>
        <body>
            <p>Sportovi: ${polje1}.</p>
            <p>Igrača: ${polje2}.</p>
            <p>Sportovi i igrači: ${polje3}.</p>
        </body>
    </html>
    `

    newWindow.document.write(content);
});

// local date and time

const dateFormat = { year : "numeric", month : "long", day : "numeric" };

function localTime() {
    let localDate = new Date().toLocaleDateString("hr-HR", dateFormat);
    let localTime = new Date().toLocaleTimeString("hr-HR");
    QS(".date").textContent = localDate;
    QS(".time").textContent = localTime;
}
setInterval(localTime, 1000);

// drag and drop of time

const timeShow = QS(".time-show");
let isDragging = false;

timeShow.addEventListener("mousedown", (event) => {
    if(event.button == 0)
    {
        isDragging = true;
    }
});

document.addEventListener("mousemove", (event) => {
    if(isDragging)
    {
        S(timeShow).left = event.clientX + "px";
        S(timeShow).top = event.clientY + "px"; 
    }

    document.addEventListener("mouseup", () => {
        isDragging = false;
    });
});

// nav animation, open and close

const nav = QS("nav");
const hamburger = QS(".hamburger");
let navOpen = false;
const hamburgerParts = QSA(".hamburger > div");

hamburger.addEventListener("click", () => {
    if(!navOpen) 
    {
        hamburgerParts[0].classList.add("first-nav-animation");
        hamburgerParts[2].classList.add("second-nav-animation");
        hamburgerParts[1].classList.add("third-nav-animation");
        S(nav).inset = "0 0 0 calc(100% - 300px)";
    }

    else 
    {
        hamburgerParts[0].classList.remove("first-nav-animation");
        hamburgerParts[2].classList.remove("second-nav-animation");
        hamburgerParts[1].classList.remove("third-nav-animation");
        S(nav).inset = "0 0 0 100%";
    }

    navOpen = !navOpen;
});

// header animacija

const headerSpan = QSA("header > h1 > span");
let spanIndex = 0;
let spanOpacity = 0.3;
let functionDirection = 1;

function uncoverLetters()
{   
    S(headerSpan[spanIndex]).opacity = spanOpacity;
    S(headerSpan[spanIndex]).opacity = "scale(1)";  

    spanIndex += functionDirection;

    if(headerSpan[spanIndex] == null && spanOpacity == 0.3) 
    {
        spanIndex = headerSpan.length - 1;
        spanOpacity = 1;
        functionDirection = -1;
    }

    else if(headerSpan[spanIndex] == null && spanOpacity == 1) 
    {
        clearInterval(headerAnimationInterval);
    }
}

let headerAnimationInterval = setInterval(uncoverLetters, 50);

// onscroll animacija

const headerLine = QS(".header-line");

function scrollAnimations()
{
    let WH = window.innerHeight;
    let scrollY = window.scrollY + WH;
    let animate = S(headerLine);

    let scrollPoints = {
        pt1 : WH + 20,
        pt2 : WH + 120,
        pt3 : WH + 220,
        pt4 : WH + 320
    }

    switch (true) {
        case scrollY == WH:
            animate.inset = "calc(100% - 3px) 100% 0px 0px";
            break;

        case scrollY > scrollPoints.pt1 && scrollY < scrollPoints.pt2:
            animate.inset = "calc(100% - 3px) 66% 0px 0px";
            animate.backgroundColor = "rgba(255, 255, 255, .3)";
            break;

        case scrollY > scrollPoints.pt2 && scrollY < scrollPoints.pt3:
            animate.inset = "calc(100% - 3px) 33% 0px 0px";
            animate.backgroundColor = "rgba(255, 255, 255, .6)";
            break;

        case scrollY > scrollPoints.pt3 && scrollY < scrollPoints.pt4:
            animate.inset = "calc(100% - 3px) 0px 0px 0px";
            animate.backgroundColor = "rgba(255, 255, 255, .95)";
            break;
    }
}

document.addEventListener("scroll", scrollAnimations);

