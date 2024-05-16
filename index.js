console.log("Hello world");

let humainScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choice = Math.random();
  if (choice <= 0.33) {
    console.log("Computer: pierre");
    return "pierre";
  } else if (choice <= 0.66) {
    console.log("Computer: papier");
    return "papier";
  } else {
    console.log("Computer: ciseaux");
    return "ciseaux";
  }
}
getComputerChoice();

function getHumanChoice() {
  let humainChoice = prompt("choisir entre : pierre , papier, ciseaux ");
  humainChoice == "";
  if (humainChoice == "pierre") {
    console.log("pierre");
  } else if (humainChoice == "papier") {
    console.log("papier");
  } else {
    console.log("ciseaux");
  }
}
getHumanChoice();

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "pierre" && computerChoice == "pierre") {
    console.log("match nul rejouer une partie");
    return;
  } else if (humanChoice == "pierre" && computerChoice == "ciseaux") {
    console.log("L'utilisateur gagner la partie");
    humainScore++;
    return;
  } else if (humanChoice == "ciseaux" && computerChoice == "papier") {
    console.log("l'utilisateur remporter la partir");
    humainScore++;
    return;
  } else if (humanChoice == "pierre" && computerChoice == "papier") {
    console.log("l'ordinateur gagner sur le papier");
    computerScore++;
    return;
  } else if (humanChoice == "papier" && computerChoice == "papier") {
    console.log("match null");
    return;
  } else if (humanChoice == "ciseaux" && computerChoice == "ciseaux") {
    console.log("match null");
    return;
  }
}

function playGame() {
  humanScore = 0;
  computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  if (humanScore > computerScore) {
    console.log("You win! You won " + humanScore + " times out of 5.");
    return;
  } else if (humanScore < computerScore) {
    console.log("You lose! You won " + humanScore + " times out of 5.");
    return;
  } else {
    console.log("We tied! You won " + humanScore + " times out of 5.");
    return;
  }
}

playGame();
