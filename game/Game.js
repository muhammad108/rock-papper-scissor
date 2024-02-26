let user = 0;
let comp = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const drawGame = () => {

    msg.innerText = "game was draw. play again."; 
    msg.style.backgroundColor = "lightslategrey"
  };

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    user++;
    userScorePara.innerText = user;
    console.log("you win");
    msg.innerText  = `you win! your ${userChoice} beats ${compChoice}`; 
    msg.style.backgroundColor = "green"
  } else {
    comp++;
    compScorePara.innerText = comp;
    console.log("you lose");
    msg.innerText  = `you lose.${compChoice} beats ${userChoice}`; 
    msg.style.backgroundColor = "red"
  }
};

const genCompChoice = () => {
  const option = ["rock", "papper", "choice"];
  const randIndx = Math.floor(Math.random() * 3);
  return option[randIndx];
};
const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);

  const compChoice = genCompChoice();
  console.log("comp choice = ", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;

    if (userChoice === "rock") {
      // scissors / papper
      userWin = compChoice === "papper" ? false : true;
    } else if (userChoice === "papper") {
      // rock / scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
