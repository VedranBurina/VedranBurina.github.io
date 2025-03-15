function QS(query) { return document.querySelector(query); }
function QSA(query) { return document.querySelectorAll(query); }

const OPTION = QSA(".ddr > div:first-child > h2");
let ddrText = QS(".ddr-text");
const DDR2 = "DDR2 je druga generacija DDR tehnologije koja je predstavljena kao nasljednik originalne DDR memorije. Jedna od ključnih razlika je povećana brzina prijenosa podataka. DDR2 moduli imaju veće brzine od svojih prethodnika i koriste manju radnu frekvenciju. Ovi moduli obično imaju veće kapacitete i omogućuju poboljšane performanse u odnosu na DDR memoriju prve generacije.";
const DDR3 = "DDR3 je treća generacija DDR tehnologije koja donosi daljnje poboljšanja u brzini prijenosa podataka i efikasnosti rada. DDR3 moduli imaju još veće radne frekvencije i kapacitete od DDR2, što rezultira boljim performansama računala. Također, DDR3 moduli troše manje energije u usporedbi s DDR2, što doprinosi smanjenju potrošnje energije računalnih sustava."; 
const DDR4 = "DDR4 je četvrta generacija DDR tehnologije koja donosi značajna unapređenja u performansama i energetskoj učinkovitosti. DDR4 moduli imaju još veće radne frekvencije i kapacitete od prethodnih generacija. Također, DDR4 uvodi tehnološke inovacije koje doprinose smanjenju potrošnje energije i poboljšavaju širinu pojasnika podataka. Ova tehnologija posebno je korisna u zahtjevnim računalnim aplikacijama, kao što su igre visoke razlučivosti, obrada videa i znanstvena istraživanja.";


OPTION.forEach((element, index) => 
{
    element.addEventListener("click", () =>
    {
        switch(index)
        {
            case 0:
                ddrText.textContent = DDR2;
                break;
    
            case 1:
                ddrText.textContent = DDR3;
                break;

            case 2:
                ddrText.textContent = DDR4;
                break;

            default: 
                break;
        }
    })
});

