humanScore=0
ComputerScore=0


function getComputerChoice()
{
    let choice = Math.floor(Math.sqrt(Math.random()*10))
    let action
    if (choice === 0) action = "Rock"
    else if (choice === 1) action = "Paper"
    else action = "Scissors"
    return action
}

let btnContainer = document.querySelector(".button-container")

btnContainer.addEventListener("click",(e) => {e.preventDefault();playRound(getHumanChoice(e.target.innerText),getComputerChoice())})

let ul = document.querySelector(".history")
let usr = document.querySelector(".usr")
let pc = document.querySelector(".pc")

function getHumanChoice(choice)
{
    return choice
}



function playRound(humanChoice,computerChoice)

{   
    let li = document.createElement("li")
    
    CC=computerChoice.toLowerCase() ;
    HC=humanChoice.toLowerCase() ;
    if (CC===HC) { pc.textContent = ++ComputerScore ; usr.textContent = ++humanScore ;li.textContent=(`draw ${CC} - ${HC}`);ul.appendChild(li)}
    else if (CC==="rock" && HC === "scissors") {pc.textContent = ++ComputerScore ; usr.textContent = humanScore ;li.textContent=`Computer won ${CC} - ${HC}`;ul.appendChild(li)}
    else if (CC==="paper" && HC === "rock") {pc.textContent = ++ComputerScore ; usr.textContent = humanScore ;li.textContent=`Computer won ${CC} - ${HC}`;ul.appendChild(li)}
    else if (CC==="scissors" && HC === "paper") {pc.textContent = ++ComputerScore ; usr.textContent = humanScore ;li.textContent=`Computer won ${CC} - ${HC}`;ul.appendChild(li)}
    else {pc.textContent = ComputerScore ; usr.textContent = ++humanScore ;li.textContent=`You won ${CC} - ${HC}`;ul.appendChild(li);}
    if (humanScore>=5){
        let body = document.querySelector("body")
        let fin = document.createElement("h1");
        fin.textContent = `YOU WON!!!!`;
        body.innerHTML="";body.appendChild(fin)}
    else if(ComputerScore>=5)
        {
        let body = document.querySelector("body")
        let fin = document.createElement("h1");
        fin.textContent = `pc won :(`;
        body.innerHTML="", body.appendChild(fin)}
    }

