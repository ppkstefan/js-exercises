const resultMessage = document.querySelector(".score");
const resultPick = document.querySelector(".picked");
let score = JSON.parse(localStorage.getItem("score"));
let resultScore = document.querySelector(".result");

if (score === null) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
}
document.body.addEventListener('keydown', (event)=>{
    if(event.key==='r')
      resultComputer('rock');
    else if(event.key==='p')
      resultComputer('paper');
      else if (event.key==='s')
      resultComputer('scissors');

})
function resetGame() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem("score");
  resultMessage.innerHTML = `Wins: ${score.wins}  Losses: ${score.losses}  Ties: ${score.ties}`;
}

function pickComputer() {
  let random = Math.random();
  if (random >= 0 && random < 1 / 3) return "rock";
  else if (random >= 1 / 3 && random < 2 / 3) return "paper";
  else if (random >= 2 / 3 && random < 1) return "scissors";
}

function resultComputer(playerMove) {
  let move = pickComputer();
  let result = "";

  // ... (your existing code)
  ///scissors
  if (playerMove === "scissors")
    if (move === "rock") {
      result = "You lost";
    } else if (move === "paper") {
      result = "You win";
    } else if (move === "scissors") {
      result = "tie";
    }
  ///paper
  if (playerMove === "paper")
    if (move === "rock") {
      result = "You win";
    } else if (move === "paper") {
      result = "tie";
    } else if (move === "scissors") {
      result = "You lost";
    }
  ///rock
  if (playerMove === "rock")
    if (move === "rock") {
      result = "tie";
    } else if (move === "paper") {
      result = "You lost";
    } else if (move === "scissors") {
      result = "You win";
    }

  if (result === "You win") score.wins += 1;
  else if (result === "You lost") score.losses += 1;
  else if (result === "tie") score.ties += 1;

  localStorage.setItem("score", JSON.stringify(score));
  resultScore.innerHTML = `${result}`;
  resultPick.innerHTML = `  You
<img src="/game/images/${playerMove}-emoji.png" class="imgScore" alt="" />
Computer
<img src="/game/images/${move}-emoji.png" class="imgScore" alt="" />`;
  resultMessage.innerHTML = `Wins: ${score.wins}  Losses: ${score.losses}  Ties: ${score.ties}`;
}
let autoPlay=0;
let intervalID;
function autoplay(){
  if(autoPlay==0)
  {
  intervalID=setInterval(function (){
  let v1=pickComputer();
  resultComputer(v1);
  },700);
  autoPlay=1;
  const g=document.querySelector('.auto');
  g.innerHTML="Stop";
  }
  else{
    clearInterval(intervalID);
    autoPlay=0;
    const g=document.querySelector('.auto');
    g.innerHTML="AUTO-play";
  }
}