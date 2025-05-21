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
function getUserChoice() {
  let userAns = "";
  let userChoice = parseInt(
    prompt("Please select your choice [1=ROCK, 2=PAPER, 3=SCISSORS]: "),
  );
  while (true) {
    if (userChoice === 1) {
      userAns = "rock";
      break;
    } else if (userChoice === 2) {
      userAns = "scissors";
      break;
    } else if (userChoice === 3) {
      userAns = "paper";
      break;
    } else {
      userChoice = parseInt(
        prompt(
          "Wrong choice! please try again [1=ROCK, 2=PAPER, 3=SCISSORS]: ",
        ),
      );
      continue;
    }
  }

  return userAns;
}

// console.log(getUserChoice());
// use while loop to get the rounds (bo5)
do {
let round = 0
}
while ( i < 5){
	let userPoint = 0
	let cpuPoint = 0
// rock win against scissors | scissors win against paper | paper win against rock
		
// print who wins
