const playGame = function () {
  let playerOneScore = 0;
  let playerTwoScore = 0;
  const firstToFive = 5;

  const btnRock = document.querySelector(".rock");
  const btnPaper = document.querySelector(".paper");
  const btnScissor = document.querySelector(".scissors");
  const machine = document.querySelector(".playertwooutput");

  const result = document.querySelector(".win");
  const pOneScore = document.querySelector(".p1");
  const pTwoScore = document.querySelector(".p2");

  const gameOver = document.querySelector(".output-container");
  const playAgain = document.querySelector(".tryagain");

  const cycle = function () {
    const playerOneOptions = [btnRock, btnPaper, btnScissor];
    const playerTwoOptions = ["rock", "paper", "scissors"];

    playerOneOptions.forEach(function (option) {
      option.addEventListener("click", function () {
        const random = Math.floor(Math.random() * playerTwoOptions.length);
        const playerTwoChoice = playerTwoOptions[random];
        machine.textContent = playerTwoChoice;

        roundWinner(option.textContent, playerTwoChoice);
        if (playerOneScore === firstToFive || playerTwoScore === firstToFive) {
          gameResult(playerOneScore, playerTwoScore);
        }
      });
    });
  };

  const roundWinner = function (human, comp) {
    human = human.toLowerCase();
    comp = comp.toLowerCase();

    if (human === comp) {
      result.textContent = "DRAWZIES!!";
    } else if (
      (human === "rock" && comp === "scissors") ||
      (human === "paper" && comp === "rock") ||
      (human === "scissors" && comp === "paper")
    ) {
      result.textContent = "PLAYER ONE WINS!";
      playerOneScore++;
      pOneScore.textContent = playerOneScore;
    } else {
      result.textContent = "PLAYER TWO WINS!";
      playerTwoScore++;
      pTwoScore.textContent = playerTwoScore;
    }
  };
  const gameResult = function (playerOneScore, playerTwoScore) {
    function disableButtons() {
      btnRock.disabled = true;
      btnPaper.disabled = true;
      btnScissor.disabled = true;
      playAgain.style.opacity = "1";
    }

    if (playerOneScore > playerTwoScore) {
      gameOver.style.fontSize = "70px";
      gameOver.style.paddingBottom = "100px";
      gameOver.textContent = "PLAYER ONE WINS";
      disableButtons();
    } else if (playerTwoScore > playerOneScore) {
      result.textContent = "PLAYER TWo WIN!";
      pOneScore.textContent = "LOOSER!";
      pTwoScore.textContent = "HA HA HA";
      disableButtons();
    }
    playAgain.addEventListener("click", () => window.location.reload());
  };

  cycle();
};
playGame();
