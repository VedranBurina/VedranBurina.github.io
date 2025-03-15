function QS(query) { return document.querySelector(query); }
function QSA(query) { return document.querySelectorAll(query); }

const SSD_HDD = QSA(".ddr > div:first-child > h2");
const SSD_HDD_TEXT = QS(".ddr-text");
const SSD = `<img alt="SSD" src="SSD.png"><p>Solid State Drive (SSD) je tip pohranjivanja podataka koji koristi memorijske čipove za trajno pohranjivanje podataka. SSD-ovi su poznati po visokoj brzini čitanja i pisanja podataka u usporedbi s tradicionalnim HDD-ovima.</p>`;
const HDD = `<img alt="HDD" src="HDD.png"><p>Hard Disk Drive (HDD) je klasični tip pohranjivanja podataka koji koristi rotirajuće magnetne ploče za čuvanje podataka. HDD-ovi su često dostupni s većim kapacitetom u usporedbi s SSD-ovima, ali imaju sporiji pristup podacima.</p>`;

SSD_HDD.forEach((element, index) =>
{
    element.addEventListener("click", () =>
    {
        switch(index)
        {
            case 0:
                SSD_HDD_TEXT.innerHTML = SSD;
                break;
    
            case 1:
                SSD_HDD_TEXT.innerHTML = HDD;
                break;

            default: 
                break;
        }
    });
});