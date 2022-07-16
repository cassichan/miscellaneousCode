const getUserChoice = (userInput) => {
  let userChoice = userInput.toLowerCase();
  if (
    userChoice === "rock" ||
    userChoice === "paper" ||
    userChoice === "scissors"
  ) {
    return userChoice;
  } else {
    console.log("Error: Please choice a valid option.");
  }
};

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer wins!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer wins!";
    } else {
      return "You won!";
    }
  }
};

const playGame = () => {
  let userChoice = getUserChoice("paper");
  let computerChoice = getComputerChoice();
  console.log("You got " + userChoice);
  console.log("The computer got " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();
