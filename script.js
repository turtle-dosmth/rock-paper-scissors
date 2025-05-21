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
// use while loop to get the rounds (bo5)
// rock win against scissors | scissors win against paper | paper win against rock
// print who wins
