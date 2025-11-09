
function getComputerChoice()
{
    let choice = Math.floor(Math.sqrt(Math.random()*10))
    let action
    if (choice === 0) action = "Rock"
    else if (choice === 1) action = "Paper"
    else action = "Scissors"
    return action
}
function getHumanChoice(choice)
{
    choice = prompt("Choice?")
    return choice
}



function playRound(humanChoice,computerChoice)
{   
    CC=computerChoice.toLowerCase() ;
    HC=humanChoice.toLowerCase() ;
    if (CC===HC) console.log(`draw ${++humanScore} - ${++ComputerScore}`);
    else if (CC==="rock" && HC === "scissors") console.log(`Computer won ${humanScore} - ${++ComputerScore}`);
    else if (CC==="paper" && HC === "rock") console.log(`Computer won ${humanScore} - ${++ComputerScore}`);
    else if (CC==="scissors" && HC === "paper") console.log(`Computer won ${humanScore} - ${++ComputerScore}`);
    else console.log(`You won ${++humanScore} - ${ComputerScore}`);
}

function playGame()
{   
    humanScore=0
    ComputerScore=0

    for (let i=1; i<=5 ; i++) 
    {
        cc=getComputerChoice()
        hc=getHumanChoice()

        console.log(cc,hc)
        console.log(playRound(hc,cc))
    }
}

playGame()