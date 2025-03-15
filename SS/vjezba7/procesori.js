// CPU input handle

function QS(query) { return document.querySelector(query); }

const OK = QS("#ok");
const GODINA = QS("#godina");
const NAZIV = QS("#naziv");
const ISPIS = QS(".ispis");
let array = [];
let counter = 0;

function ok() 
{
    array[counter] = `<div><span>${counter + 1}.</span><span class="ispis1">${NAZIV.value}</span><span class="ispis2">${GODINA.value}</span></div>`;
    ISPIS.innerHTML += array[counter];
    counter++;

    OK.removeEventListener("click", ok);
}

GODINA.addEventListener("input", () => 
{
    if(GODINA.value.length == GODINA.maxLength) 
    {
        GODINA.blur();
        NAZIV.focus();

        OK.addEventListener("click", ok);
    }
});