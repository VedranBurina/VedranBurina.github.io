function QS(query) { return document.querySelector(query); }
function QSA(query) { return document.querySelectorAll(query); }

const SSD_HDD = QSA(".ddr > div:first-child > h2");
const SSD_HDD_TEXT = QS(".ddr-text");
let ssdPlaceholder = `Solid State Drive (SSD) je tip pohranjivanja podataka koji koristi memorijske čipove za trajno pohranjivanje podataka. SSD-ovi su poznati po visokoj brzini čitanja i pisanja podataka u usporedbi s tradicionalnim HDD-ovima.`;
let hddPlaceholder = `Hard Disk Drive (HDD) je klasični tip pohranjivanja podataka koji koristi rotirajuće magnetne ploče za čuvanje podataka. HDD-ovi su često dostupni s većim kapacitetom u usporedbi s SSD-ovima, ali imaju sporiji pristup podacima.`;
let ZOOM;
let IMG;
let NOT_DDR_TEXT;
let elementZoomed = false;

SSD_HDD.forEach((element, index) =>
{
    element.addEventListener("click", () =>
    {
        let ssd = `<div class="zoom">Povećaj</div><img alt="SSD" src="SSD.png"><textarea rows="4" cols="100" placeholder="${ssdPlaceholder}">`;
        let hdd = `<div class="zoom">Povećaj</div><img alt="HDD" src="HDD.png"><textarea rows="4" cols="100" placeholder="${hddPlaceholder}">`;

        switch(index)
        {
            case 0:
                SSD_HDD_TEXT.innerHTML = ssd;
                break;
    
            case 1:
                SSD_HDD_TEXT.innerHTML = hdd;
                break;

            default: 
                break;
        }

        ZOOM = QS(".zoom");
        IMG = QS("img");
        NOT_DDR_TEXT = QS(".not-ddr-text > textarea")

        ZOOM.addEventListener("click", () =>
        {
            elementZoomed = !elementZoomed;

            if(elementZoomed)
            {
                S(IMG).width = "400px";
                ZOOM.textContent = "Smanji";
            }

            else
            {
                S(IMG).width = "300px";
                ZOOM.textContent = "Povećaj";
            }
        });

        NOT_DDR_TEXT.addEventListener("input", () =>
        {
            if(index == 0) ssdPlaceholder = NOT_DDR_TEXT.value;
            else hddPlaceholder = NOT_DDR_TEXT.value;
            console.log("heard");
        });
    });
});