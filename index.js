let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);

  if (choice == 0) {
    console.log("computer: pierre");
    return "pierre";
  } else if (choice == 1) {
    console.log("Computer : papier");
    return "papier";
  } else if (choice == 2) {
    console.log("Computer : ciseaux");
    return "ciseaux";
  }
}

function getHumanChoice() {
  let choice = prompt("Choisir Entrez : pierre , papier, ciseaux");
  if (choice == "pierre") {
    console.log("humain : pierre");
    return choice;
  } else if (choice == "papier") {
    console.log("humain : papier");
    return choice;
  } else if (choice == "ciseaux") {
    console.log("humain : ciseaux");
    return choice;
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log(`vous etes a egalite ${humanChoice} et ${computerChoice} `);
  } else if (
    (humanChoice == "pierre" && computerChoice == "ciseaux") ||
    (humanChoice == "ciseaux" && computerChoice == "paper") ||
    (humanChoice == "papier" && computerChoice == "pierre")
  ) {
    console.log(`Vous avez gagnez ! ${humanChoice} bat ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`vous avez perdue ${computerChoice} bat ${humanChoice}`);
    computerScore++;
  }
}

function playGame() {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
}
for (let i = 0; i < 5; i++) {
  playGame();
}
if (humanScore > computerScore) {
  console.log(
    `Vous avez gagné la partie avec un score de ${humanScore} à ${computerScore}`
  );
} else {
  console.log(
    `Vous avez perdu la partie avec un score de ${humanScore} à ${computerScore}`
  );
}
