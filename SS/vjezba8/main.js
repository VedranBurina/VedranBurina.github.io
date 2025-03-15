function QS(query) { return document.querySelector(query); }
function QSA(query) { return document.querySelectorAll(query); }
function S(element) { return element.style; }

let ucenici = `{ "skola" : 
    [
    { "ime" : "Ivan", "prezime" : "Ivić" },
    { "ime":"Pero" , "prezime":"Perić" },
    { "ime":"Marko" , "prezime":"Marković" },
    { "ime":"Vedran" , "prezime":"Burina" }
    ]
}`;

let uceniciObj = JSON.parse(ucenici);

const SECTION = QSA("section");
const BTN = QSA(".btn");

let k = 0;
let imena = {imena : []};

function printUceniciObj(sectionNum)
{
    if(sectionNum == 1)
    {
        SECTION[0].innerHTML = `<div class="btn" style="opacity: 1;" onclick="printUceniciObj(1);">ISPIŠI JSON</div>`;
        for(let i = 0; i < uceniciObj.skola.length; i++)
        {
            SECTION[0].innerHTML += `
                <p>ime: ${uceniciObj.skola[i].ime} | prezime: ${uceniciObj.skola[i].prezime}</p>
            `;
        }
    }
   
    else
    {   
        let ime = [];
        let prezime = [];
        ime[k] = QSA("input")[0].value;
        prezime[k] = QSA("input")[1].value;

        imena.imena[k] =
            {
                ime : ime[k],
                prezime : prezime[k]
            };

        k++;

        for(let i = 0; i < 1; i++)
        {
            SECTION[1].innerHTML += `
                <p>JSON: ${JSON.stringify(imena)}</p>
            `;
        }
    }
}

document.addEventListener("scroll", () => 
{
    let scrollY = window.scrollY + window.innerHeight; 
    if(scrollY > window.innerHeight + 130) S(QS("header")).borderBottom = "3px #e3e3e3 solid";
    if(scrollY > window.innerHeight * 2 - 200) S(BTN[0]).opacity = "1";
    if(scrollY > window.innerHeight * 2 + 130) S(SECTION[0]).borderBottom = "3px #e3e3e3 solid";
    if(scrollY > window.innerHeight * 3 - 200)
    {
        S(BTN[1]).opacity = "1";
        S(QSA("input")[0]).opacity = "1";
        S(QSA("input")[1]).opacity = "1";
    }
});

window.onload = () => 
{
    const SPAN = QSA("header > h1 > span");
    let i = 0;
    console.log(SPAN[i]);
    

    function loadLetters()
    {
        if(i > SPAN.length - 1) return;

        setTimeout(() => 
        {
            SPAN[i].style.opacity = "1";
            i++;
            loadLetters();
        }
        ,250)
    }

    loadLetters();
};