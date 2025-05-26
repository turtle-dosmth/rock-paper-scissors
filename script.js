// GAME LOGIC DOWN BELOW //
// get computer choice
function getCpuChoice() {
  let cpuChoice = "";
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      cpuChoice = "rock";
      break;
    case 1:
      cpuChoice = "scissors";
      break;
    case 2:
      cpuChoice = "paper";
      break;
  }
  return cpuChoice;
}

// get user choice from input either by showing user an actual choice (like 1 = rock 2 = paper 3 = scissors)
// or let user type in the choice (former is better ig)
// let userChoice = parseInt(
//   prompt("Please select your choice [1=ROCK, 2=PAPER, 3=SCISSORS]: "),
// );
// function getUserChoice() {
//   let userChoice = prompt(
//     "Please select your choice [ROCK, PAPER, SCISSORS]: ",
//   );
//   return userChoice.toLowerCase();
// }
// console.log(getUserChoice());

let userScore = 0;
let cpuScore = 0;

function playRound(userChoice, cpuChoice) {
  if (userChoice === "rock" && cpuChoice === "scissors") {
    console.log("Player win!");
    userScore++;
  } else if (userChoice === "paper" && cpuChoice === "rock") {
    console.log("Player win!");
    userScore++;
  } else if (userChoice === "scissors" && cpuChoice === "paper") {
    console.log("Player win!");
    userScore++;
  } else if (cpuChoice === "rock" && userChoice === "scissors") {
    console.log("CPU Win!");
    cpuScore++;
  } else if (cpuChoice === "paper" && userChoice === "rock") {
    console.log("CPU Win!");
    cpuScore++;
  } else if (cpuChoice === "scissors" && userChoice === "paper") {
    console.log("CPU Win!");
    cpuScore++;
  } else {
    console.log("Tie! again!");
    return true;
  }
  return false;
}

// use while loop to get the rounds (bo5)
// function playGame() {
//   console.log("Welcome to the games current score is:");
//   while (userScore < 5 || cpuScore < 5) {
//     console.log("User: " + userScore + "CPU: " + cpuScore);
//     console.log("Now the games begin!");
//     playRound(getUserChoice(), getCpuChoice());
//     if (userScore === 5) {
//       console.log("Congrat!, you win!");
//       break;
//     } else if (cpuScore === 5) {
//       console.log("Sorry, lets try again next time!");
//       break;
//     }
//   }
// }
// playGame();
// rock win against scissors | scissors win against paper | paper win against rock
// print who wins
// JS DOM BELOW
const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => {
  playRound("rock", getCpuChoice());
  scoreUpdater();
  winCheck();
});

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => {
  playRound("paper", getCpuChoice());
  scoreUpdater();
  winCheck();
});

const sciBtn = document.querySelector("#scissors");
sciBtn.addEventListener("click", () => {
  playRound("scissors", getCpuChoice());
  scoreUpdater();
  winCheck();
});

const showScore = document.querySelector("#score-board");
function scoreUpdater() {
  showScore.textContent =
    "USER SCORE: " + userScore + " CPU SCORE: " + cpuScore;
}

const winDec = document.querySelector("#win-declare");
function winCheck() {
  if (userScore === 5) {
    winDec.textContent = "Congrat!, you are the winner!";
  } else if (cpuScore === 5) {
    winDec.textContent = "Sorry, CPU win!. Try again next time";
  }
}
