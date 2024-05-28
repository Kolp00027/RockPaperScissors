let humanScore = 0;
let computerScore = 0;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("pierre").addEventListener("click", () => {
    const humanChoice = "pierre";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });
  document.getElementById("papier").addEventListener("click", () => {
    const humanChoice = "papier";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });
  document.getElementById("ciseaux").addEventListener("click", () => {
    const humanChoice = "ciseaux";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });

  function disablebutton() {
    document.getElementById("pierre").disabled = true;
    document.getElementById("papier").disabled = true;
    document.getElementById("ciseaux").disabled = true;
  }

  function playRound(humanChoice, computerChoice) {
    const result = document.getElementById("result");
    const scoreDiv = document.getElementById("score");
    const winnerDiv = document.getElementById("winner");
    result.style.display = "flex";
    result.style.borderRadius = "5px";
    result.style.border = "none";
    result.style.fontWeight = "900";
    result.style.maxWidth = "150px";
    result.style.marginBottom = "10px";
    scoreDiv.style.Width = "50px";
    result.style.background = "red";
    scoreDiv.style.marginBottom = "10px";
    winnerDiv.style.background = "black";
    winnerDiv.style.color = "white";
    winnerDiv.style.padding = "5px";
    winnerDiv.style.borderRadius = "10px";

    if (humanChoice == computerChoice) {
      console.log(`vous etes a egalite ${humanChoice} et ${computerChoice} `);
      result.textContent = `vous etes a egalite ${humanChoice} et ${computerChoice} `;
    } else if (
      (humanChoice == "pierre" && computerChoice == "ciseaux") ||
      (humanChoice == "ciseaux" && computerChoice == "paper") ||
      (humanChoice == "papier" && computerChoice == "pierre")
    ) {
      console.log(`vous avez gagnez ! ${humanChoice} bat ${computerChoice}`);
      result.textContent = `Vous avez gagnez ! ${humanChoice} bat ${computerChoice}`;
      humanScore++;
    } else {
      console.log(`vous avez perdue ${computerChoice} bat ${humanChoice}`);
      result.textContent = `vous avez perdue ${computerChoice} bat ${humanChoice}`;
      computerScore++;
    }
    scoreDiv.textContent += `  Scores :  Humain: ${humanScore}, Ordinateur: ${computerScore}`;

    if (humanScore === 5 && humanScore > computerScore) {
      winnerDiv.textContent = `Félicitations! Vous avez gagné la partie le score est de ${humanScore} sur ${computerScore}`;
      disablebutton();
    } else if (computerScore === 5 && computerScore > humanScore) {
      winnerDiv.textContent = `Dommage! Vous avez perdu la partie! score est de ${computerScore} sur ${humanScore}`;
      disablebutton();
    }
  }
});

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
