const QS = (query) => document.querySelector(query);
const QSA = (query) => document.querySelectorAll(query);
const S = (em) => em.style;
const z = (num) => num.toFixed(2);

const IZNOS_KREDITA_EM = QS("#iznos-kredita");
const BROJ_RATA_EM = QS("#broj-rata");
const VALUTA = QS("#valuta");
const IZRACUNAJ_RATU_EM = QS("#izracunaj-ratu");
let rata;
let trosak = [];

const RATA_ISPIS_EM = QS("#rata-ispis");
const R_I_H2_EM = QSA("#rata-ispis > h3");

IZRACUNAJ_RATU_EM.addEventListener("click", () => 
{
    trosak[0] = IZNOS_KREDITA_EM.value * (1 + ((BROJ_RATA_EM.value / 12) * 0.06));
    trosak[1] = IZNOS_KREDITA_EM.value * 1.06 ** 5;
    rata = trosak[0] / BROJ_RATA_EM.value;
    
    R_I_H2_EM[0].textContent = `Mjesečna rata: ${rata.toFixed(2)}${VALUTA.value}`;
    R_I_H2_EM[1].textContent = `Ukupan trošak kredita(fiksna osnovica): ${z(trosak[0])}${VALUTA.value}`;
    R_I_H2_EM[2].textContent = `Ukupan trošak kredita(varijabilna osnovica): ${z(trosak[1])}${VALUTA.value}`;

    const ISPIS_STYLE = S(RATA_ISPIS_EM);

    let brojRataNumber = parseInt(BROJ_RATA_EM.value, 10);

    if(brojRataNumber <= 24) ISPIS_STYLE.backgroundColor = "#1DBF67";
    else if(brojRataNumber > 24 && brojRataNumber <=48) ISPIS_STYLE.backgroundColor = "#1976D2";
    else ISPIS_STYLE.backgroundColor = "#FF5733";

    switch(VALUTA.value)
    {
        case "HRK":
            ISPIS_STYLE.border = "2px solid #1976D2";
            break;

        case "€":
            ISPIS_STYLE.border = "2px solid #1DBF67";
            break;
    }
});

const ISPIS_OTPLATE_EM = QS("#ispis-otplate");
const DATUM_EM = QS("#datum");

ISPIS_OTPLATE_EM.addEventListener("click", () =>
{
    let ws = { width: window.screen.width, height: window.screen.height };

    let dug = IZNOS_KREDITA_EM.value * (1 + ((BROJ_RATA_EM.value / 12) * 0.06));
    let rata1 = dug / BROJ_RATA_EM.value;

    let polje = [];
    let datum = new Date(DATUM_EM.value);
    datum.setMonth(datum.getMonth() - 1);
    for(let i = 0; i < BROJ_RATA_EM.value; i++)
    {
        datum.setMonth(datum.getMonth() + 1);
        let localeDate = datum.toLocaleDateString("hr-HR", { day: "numeric", month: "long", year: "numeric" });
        polje[i] = `${i + 1}. mjesec; ${localeDate}; iznos rate: ${rata1.toFixed(2)}; uplaceno: ${rata1.toFixed(2)}; dug: ${z(dug - ((i + 1) * rata1))}`;
    }
    let poljeIspis; 
    polje.forEach(em => 
    {
        poljeIspis += `<p>${em}</p> <br>`;    
    });

    let newWindow = window.open("", `Ispis otplate ${Math.random()}`, `width = ${ws.width}, height = ${ws.height}`);

    let tekst = `
        <html>
            <head>
                <title>Ispis otplate</title>
                <style>
                    * {
                        margin: 0;
                        padding: 0;
                        font-family: monospace;
                        padding: 5px;
                        font-size: 18px;
                    }

                    p { 
                    }
                    div {
                        cursor: pointer;
                        border: 1px solid darkgray;
                        transition: .3s all ease;
                        width: fit-content;
                    }
                    div:hover {
                        background-color: darkgray;
                        color: rgb(240, 240, 240);
                    }
                </style>
            </head>
            <body>
                ${poljeIspis.replace("undefined", "")}
                <div onclick="window.print();">Ispiši otplatnu listu</div>
            </body>
        </html>
    `;
    newWindow.document.write(tekst);
});

function localTime() 
{
    let localDate = new Date().toLocaleDateString("hr-HR", { day: "numeric", month: "long", year: "numeric" });
    let localTime = new Date().toLocaleTimeString("hr-HR");
    QS(".date").textContent = localDate;
    QS(".time").textContent = localTime;
}
setInterval(localTime, 1000);

const timeShow = QS(".time-show");
let isDragging = false;

timeShow.addEventListener("mousedown", (event) => 
{
    if(event.button == 0)
    {
        isDragging = true;
    }
});

document.addEventListener("mousemove", (event) => 
{
    if(isDragging)
    {
        S(timeShow).left = event.clientX + "px";
        S(timeShow).top = event.clientY + "px"; 
    }

    document.addEventListener("mouseup", () => {
        isDragging = false;
    });
});
