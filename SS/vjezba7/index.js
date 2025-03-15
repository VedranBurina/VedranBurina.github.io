function S(element) { return element.style };
function QS(query) { return document.querySelector(query); }
function QSA(query) { return document.querySelectorAll(query); }

S(document.body).overflowY = "hidden";

const SECTION_IMG = QSA("section img");
const SECTION_TD = QSA("section td");
const SECTION_TD_H1 = QSA("section td > h1");

SECTION_TD.forEach((element, index) => 
{
    element.addEventListener("mouseenter", () => 
    {
        S(SECTION_IMG[index]).filter = "grayscale(0%)";
        S(element).border = "1px solid white";
        S(SECTION_TD_H1[index]).opacity = ".6";
        S(SECTION_TD_H1[index]).top = "50%";
    });

    element.addEventListener("mouseleave", () => 
    {
        S(SECTION_IMG[index]).filter = "grayscale(100%)";
        S(element).border = "1px solid transparent";
        S(SECTION_TD_H1[index]).opacity = "0";
        S(SECTION_TD_H1[index]).top = "45%";
    });
});

const BUTTON_LOGIN = QS("#button-login");
const USER = QS("#user-login");
const PASS = QS("#pass-login");

function getCookieValue(valueName)
{
    let cookies = document.cookie.split(";");
    console.log(cookies);

    for(let i = 0; i < cookies.length; i++)
    {
        let cookieParts = cookies[i].split("=");
        let name = cookieParts[0];
        let value = cookieParts[1];

        if(name == valueName)
        return value;
    }
}

let usr;
let pass;

BUTTON_LOGIN.addEventListener("click", () =>
{
    if (USER.value != "" && PASS.value != "") 
    {
        const COOKIE_LOGIN = QS(".cookie-login");
        S(COOKIE_LOGIN).display = "none";

        usr = USER.value;
        pass = PASS.value;
        
        document.cookie = `user=${usr}; pass=${pass}`;

        window.alert(`Ime: ${usr} \n Lozinka: ${pass}`);
        S(document.body).overflowY = "scroll";
    }

    else {
        window.alert("Unesite ispravne podatke.");
    }   
});

// nez vec ke delam 
// idem spat
// neda mi se vec treba se i za ispite vuciti

const BUTTON_LOGIN2 = QS("#button2-login");
const USER2 = QS("#user2-login");
const PASS2 = QS("#pass2-login");

function smece() 
{
    S(document.body).overflowY = "hidden";
    const COOKIE_LOGIN2 = QS(".cookie-login2");  
    
    if(USER2.value == "" && PASS2.value == "") 
    {
        S(COOKIE_LOGIN2).display = "flex";

        BUTTON_LOGIN2.addEventListener("click", () => 
        {
            if (USER2.value == usr  && PASS2.value == pass) 
            {
                window.location.href='memorije.html';
            }

            else {
                window.alert("Unesite ispravne podatke.");
            }
        });    
    } 
}