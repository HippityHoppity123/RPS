function getComputerChoice () {
    let Random = Math.floor(Math.random()*3)
    switch (Random) {
        case 1:
            return "Scissors"
        case 2:
            return "Rock"
        default:
            return "Paper"
    }
}

function playRound (humanChoice, computerChoice) {
    if (humanChoice===computerChoice) {
        return "Draw!"
    }
    else if (humanChoice === "ROCK") {
        if (computerChoice === "SCISSORS") {
            humanScore++
            return "Computer played scissors! You win!"
        }
        else {
            computerScore++
            return "Computer played paper! Womp Womp!"
        }
    }
    else if (humanChoice === "PAPER") {
        if (computerChoice === "ROCK") {
            humanScore++
            return "Computer played rock! You win!"
        }
        else {
            computerScore++
            return "Computer played scissors! Womp Womp!"
        }
    }
    else {
        if (computerChoice === "PAPER") {
            humanScore++
            return "Computer played paper! You win!"
        }
        else {
            computerScore++
            return "Computer played rock! Womp Womp!"
        }
    }
}

let result = ""
let humanScore = 0
let computerScore = 0

const rock = document.createElement("button")
rock.textContent = "Rock"
rock.style.border = "Black"
rock.style.borderRadius = "6px"
rock.onclick = () => {
    let humanChoice="ROCK"
    let computerChoice=getComputerChoice().toUpperCase()
    result = playRound(humanChoice, computerChoice)
    div.textContent = result
    compscore.textContent = `Computer Score: ${computerScore}`
    humanscore.textContent = `Your Score: ${humanScore}`
    if (computerScore === 5 && humanScore <5) {
        finale.textContent = "You lost the game! Womp Womp!"
    }
    if (humanScore === 5 && computerScore <5) {
        finale.textContent = "You won the game! Yippee!"
    }
}
document.body.append(rock)

const paper = document.createElement("button")
paper.textContent = "Paper"
paper.style.border = "Black"
paper.style.borderRadius = "6px"
paper.onclick = () => playRound("PAPER")
paper.onclick = () => {
    let humanChoice="PAPER"
    let computerChoice=getComputerChoice().toUpperCase()
    result = playRound(humanChoice, computerChoice)
    div.textContent = result
    compscore.textContent = `Computer Score: ${computerScore}`
    humanscore.textContent = `Your Score: ${humanScore}`
    if (computerScore === 5 && humanScore <5) {
        finale.textContent = "You lost the game! Womp Womp!"
    }
    if (humanScore === 5 && computerScore <5) {
        finale.textContent = "You won the game! Yippee!"
    }
}
document.body.append(paper)

const scissors = document.createElement("button")
scissors.textContent = "Scissors"
scissors.style.border = "Black"
scissors.style.borderRadius = "6px"
scissors.onclick = () => playRound("SCISSORS")
scissors.onclick = () => {
    let humanChoice="SCISSORS"
    let computerChoice=getComputerChoice().toUpperCase()
    result = playRound(humanChoice, computerChoice)
    div.textContent = result
    compscore.textContent = `Computer Score: ${computerScore}`
    humanscore.textContent = `Your Score: ${humanScore}`
    if (computerScore === 5 && humanScore <5) {
        finale.textContent = "You lost the game! Womp Womp!"
    }
    if (humanScore === 5 && computerScore <5) {
        finale.textContent = "You won the game! Yippee!"
    }
}
document.body.append(scissors)

const div = document.createElement("div")
document.body.append(div)

const compscore = document.createElement("div")
document.body.append(compscore)

const humanscore = document.createElement("div")
document.body.append(humanscore)

const finale = document.createElement("div")
document.body.append(finale)


