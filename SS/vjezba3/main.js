// skracena querySelector funkcija 
const QS = (query) => document.querySelector(query);
const QSA = (query) => document.querySelectorAll(query);

// animacija za header
const writeOut = QSA(".write-out");
let writeInHeaderIncrement = 0; 

function writeInHeader()
{
    writeOut[writeInHeaderIncrement].style.display = "inline";
    writeInHeaderIncrement += 1;

    if(writeOut[writeInHeaderIncrement] == null) clearInterval(writeInHeaderInterval);
}

let writeInHeaderInterval = setInterval(writeInHeader, 100);

// animacije on-scroll
const line = QS(".line");

document.addEventListener("scroll", () => 
{
    let scrollY = window.scrollY + window.innerHeight;
    let firstScrollPoint = window.innerHeight + 50;

    if(scrollY > firstScrollPoint)
    {
        line.style.width = "100vw";
    }
    
    else if(scrollY < firstScrollPoint)
    {
        line.style.width = "0";
    }
})

// potenciranje
const exponentationButton = QS(".exponentation");

function numberFormater(number) {
    let formatedNumber = number.toString().replace(",", ".");
    return parseFloat(formatedNumber, 10);
}

function isDecimal(number) {
    return number % 1 != 0;
}

exponentationButton.addEventListener("click", ()=> {
    let base = window.prompt("Upišite bazu.", "x");
    let exponent = window.prompt("Upišite eksponent.", "n");
    let result = numberFormater(base) ** numberFormater(exponent);

    if(isDecimal(result) && !isNaN(result)) window.alert(result.toFixed(4));
    else if(isNaN(result)) window.alert("Neispravan unos.");
    else window.alert(result);
});

// window.open preko cijelog zaslona, s upisom preko forme
const openButton = QS(".open");
const closeButton = QS(".form-close");
const form = QS(".form");
const potvrdiButton = QS(".button-potvrdi");

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

openButton.addEventListener("click", () => {
    form.style.display = "flex";
});
closeButton.addEventListener("click", ()=> {
    form.style.display = "none";
});

function windowOpen(txt, bgImage, txtClr, txtSize) {
    txt = QS('input[type="text"]').value;
    txtSize = QS('input[type="number"]').value;
    txtClr = QS('input[type="color"]').value;
    let rndName = `Ljubimci ${Math.random()}`;
    bgImage = "bgImage.jpg";

    let newWindow = window.open("", rndName, `width=${screenWidth},height=${screenHeight},scrollbars=no,resizable=no,status=no,toolbar=no,location=no,menubar=no,fullscreen=yes`);

    let newWindowCode = `
    <html>
        <head>
            <title>Ljubimci</title>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    font-family: Monospace;
                    color: ${txtClr};
                }
                p {
                    text-align: center;
                    padding: 30px;
                    font-size: ${txtSize};
                    background-color: rgba(255, 255, 255, .5);
                }
                table {
                    position: relative;
                    left: 50%;
                    transform: translateX(-50%);
                    padding-top: 30px;
                    color: #1c1c1c;
                    background-color: rgba(255, 255, 255, .5);
                }
                td {
                    padding: 10px 20px;
                    font-size: 18px;
                }
                hr {
                    border: 1px solid ${txtClr};
                }
                body {
                    background-image: url("${bgImage}");
                    background-position: center center;
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                }
            </style>
        </head>
        <body >
                <p>
                    Ljubimci: ${txt}.
                </p>
                <hr>
                <table>
                    <tr>
                        <td>Širina zaslona:</td><td>${screenWidth}px</td>
                    </tr>
                    <tr>
                        <td>Visina zaslona:</td><td>${screenHeight}px</td>
                    </tr>
                    <tr>
                        <td>Broj piksela na zaslonu:</td><td>${screenWidth * screenHeight}px</td>
                    </tr>
                </table>
        </body>
    </html>
    `;

    newWindow.document.write(newWindowCode);
}

potvrdiButton.addEventListener("click", windowOpen);



