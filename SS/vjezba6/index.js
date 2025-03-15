// img hover effect

function QSA(query) { return document.querySelectorAll(query); }

const SECTION_IMG = QSA("section img");
const SECTION_TD = QSA("section td");
const SECTION_TD_H1 = QSA("section td > h1");

SECTION_TD.forEach((element, index) => 
{
    element.addEventListener("mouseenter", () => 
    {
        S(SECTION_IMG[index]).filter = "grayscale(0%)";
        S(SECTION_IMG[index]).padding = "0";
        S(element).border = "1px solid white";
        S(SECTION_TD_H1[index]).opacity = ".6";
        S(SECTION_TD_H1[index]).top = "50%";
    });

    element.addEventListener("mouseleave", () => 
    {
        S(SECTION_IMG[index]).filter = "grayscale(100%)";
        S(SECTION_IMG[index]).padding = "15px";
        S(element).border = "1px solid transparent";
        S(SECTION_TD_H1[index]).opacity = "0";
        S(SECTION_TD_H1[index]).top = "45%";
    });
});