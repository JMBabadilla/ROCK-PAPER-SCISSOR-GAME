let playerWins = 0;
let computerWins = 0;
let ties = 0;

function play(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  document.getElementById("computer-choice").textContent = computerChoice;

  let result;
  if (playerChoice === computerChoice) {
    result = "Tie";
    ties++;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You win";
    playerWins++;
  } else {
    result = "Computer wins";
    computerWins++;
  }

  const historyItem = `${playerChoice} vs. ${computerChoice}: ${result}`;
  const historyList = document.getElementById("history");
  const historyItemElement = document.createElement("div");
  historyItemElement.textContent = historyItem;
  historyList.prepend(historyItemElement);

}

function del_btn(){
    let menu_list = document.querySelector('#history');
    menu_list.removeChild(menu_list.lastElementChild);
}