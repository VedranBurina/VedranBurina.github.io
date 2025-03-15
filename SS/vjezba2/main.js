const n1 = 22;
const n2 = 33;

const spanZbrajanje = document.querySelector(".result-plus");
const spanOduzimanje = document.querySelector(".result-minus");
const spanDijeljenje = document.querySelector(".result-divide");
const spanMnozenje = document.querySelector(".result-multiply");

const spanNiz = document.querySelector(".result-array-myb");
const spanParni = document.querySelector(".result-even");
const spanNeparni = document.querySelector(".result-odd");

const spanBin = document.querySelector(".result-bin");
const spanBin2 = document.querySelector(".result-bin2");
const spanHex = document.querySelector(".result-hex");
const spanHex2 = document.querySelector(".result-hex2");

spanZbrajanje.textContent = `${n1 + n2}`;
spanOduzimanje.textContent = `${n1 - n2}`;
spanDijeljenje.textContent = `${(n1 / n2).toFixed(4)}`;
spanMnozenje.textContent = `${n1 * n2}`;

function puniNiz() {
    let numbers = "";
    for (let i = 1; i < 22; i++) {
        if (i < 21) {
            numbers += `${i}, `;
        } else {
            numbers += `${i}`;
        }
    }
    spanNiz.textContent = numbers;
    console.log(numbers);
}
puniNiz();
  
function parni() {
    let evenNumbers = "";
    for (let i = 1; i < 22; i++) {
        if (i % 2 === 0 && i !== 20) {
            evenNumbers += `${i}, `;
        } else if (i === 20) {
            evenNumbers += `${i}`;
        } else {
            continue;
        }
    }
    spanParni.textContent = evenNumbers;
    console.log(evenNumbers);
}
parni();
  
function neparni() {
    let oddNumbers = "";
    for (let i = 1; i < 22; i++) {
        if (i % 2 === 1 && i !== 21) {
            oddNumbers += `${i}, `;
        } else if (i === 21) {
            oddNumbers += `${i}`;
        } else {
        continue;
        }
    }
    spanNeparni.textContent = oddNumbers;
    console.log(oddNumbers);
}
neparni();

spanBin.textContent = n1.toString(2);
spanBin2.textContent = n2.toString(2);
spanHex.textContent = n1.toString(16);
spanHex2.textContent = n2.toString(16);

const line1 = document.querySelectorAll(".line1");
const line2 = document.querySelector(".line2");

function fillTheLine (line) {
    for(let i = 0; i < 5; i++)
    {
        const lineElement1 = document.createElement("div");
        lineElement1.classList.add("line-element-1");

        const lineElement2 = document.createElement("div");
        lineElement2.classList.add("line-element-2");

        line.appendChild(lineElement1);
        line.appendChild(lineElement2);
    }
}

fillTheLine(line1[0]);
fillTheLine(line2);
fillTheLine(line1[1]);


const header = document.getElementsByTagName("header")[0];

document.addEventListener("scroll", ()=> {
    if(window.scrollY > 30) header.classList.add("header-onscroll");
    else header.classList.remove("header-onscroll");
});


const dropdownDiv = document.querySelector(".dropdown-div");
const dropdown = document.querySelector(".dropdown");
let dropdownOpen = false;
const operationSelect = document.querySelectorAll(".dropdown > div");
let operation = "+";
const currentOperation = document.querySelector(".current-operation");
const spanRezultat = document.querySelector(".result-operation");
const input = document.querySelectorAll("input");

document.addEventListener("DOMContentLoaded", () => {
    input.forEach((inputEm) => {
        inputEm.value = "";
    });
});

function dropDownOpenClose() {
    if(dropdownOpen == false)
    {
        dropdown.classList.add("dropdown-open");
        setTimeout(() => {
            dropdown.style.zIndex = "2";
        }, 400);
    }

    else
    {
        dropdown.classList.remove("dropdown-open"); 
        dropdown.style.zIndex = "-1";
    }

    dropdownOpen = !dropdownOpen;
}

operationSelect.forEach((div, index) => {
    div.addEventListener("click", () => {
        operation = div.textContent;
        currentOperation.textContent = operation;
    });
});

function calculateOperation() {
    let o1 = parseFloat(input[0].value.replace(",", "."), 10);
    let o2 = parseFloat(input[1].value.replace(",", "."), 10);

    if(isNaN(o1 + o2)) spanRezultat.textContent = "";

    else
    {
        switch(operation)
        {   
            case "+":
                spanRezultat.textContent = o1 + o2;
                break;
        
            case "-":
                spanRezultat.textContent = o1 - o2;
                break;

            case "/":
                spanRezultat.textContent = o1 / o2;
                break;

            case "*":
                spanRezultat.textContent = o1 * o2;
                break;

            case "^":
                spanRezultat.textContent = o1 ** o2;
                break;

            default:
                break;
        }
    }
}

const operationCalculation = setInterval(calculateOperation, 400);

dropdownDiv.addEventListener("click", dropDownOpenClose);




