let currentTime = new Date();

let time = 
{
    hours : currentTime.getHours(),
    minutes : currentTime.getMinutes(),
    seconds : currentTime.getSeconds()
}

let timer = 
{
    hours : document.querySelector(".hours"),
    minutes : document.querySelector(".minutes"),
    seconds : document.querySelector(".seconds"),
    timeText : document.querySelector(".time-text")
}

function updateTime() {
    time.seconds++;

    if(time.seconds == 60) 
    {
        time.seconds = 0;
        time.minutes++;
    }
    
    if(time.minutes == 60) 
    {
        time.minutes = 0;
        time.hours++;
    }
    
    if(time.hours == 24)
    {
        time.hours = 0;
    }

    timer.hours.textContent = time.hours.toString().padStart(2, '0');
    timer.minutes.textContent = time.minutes.toString().padStart(2, '0');
    timer.seconds.textContent = time.seconds.toString().padStart(2, '0');

    if(time.hours >= 12 && time.hours < 18)
    {
        timer.timeText.textContent = "Popodne je.";
        document.body.style.backgroundColor = "lime";
    }

    else if(time.hours >= 18 || time.hours < 6)
    {
        timer.timeText.textContent = "Večer/noć je.";
        document.body.style.backgroundColor = "#001f3f";
    }

    else {
        timer.timeText.textContent = "Prije podne je.";
        document.body.style.backgroundColor = "gold";
    }
}

setInterval(updateTime, 1000);


const button = document.querySelector(".button");
let userInput;
let euro;

const table = 
{
    hrk : document.querySelector(".hrk"),
    euro : document.querySelector(".euro")
}

button.addEventListener("click", () => {
    userInput = prompt("Unesite vrijednost u HRK.", "HRK");

    if(!isNaN(parseFloat(userInput, 10))) 
    {
        euro = parseFloat(userInput.replace(",", "."), 10) / 7.5345;
        euro = parseFloat(euro.toFixed(4), 10);

        table.hrk.textContent = `${userInput} HRK`;
        table.euro.textContent = `${euro} €`; 
    }

    else
    {
        window.alert("Unesite vrijednost (broj).")
    }
});