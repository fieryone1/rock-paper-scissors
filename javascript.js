const btnrock = document.querySelector("#rock");
const btnpaper = document.querySelector("#paper");
const btnscissors = document.querySelector("#scissors");
const textbox = document.querySelector("#textbox");
const lifedisplay = document.querySelector("#lives");

let lives;
let complives;



function main(){
lifedisplay.textContent=""
lives = 5;
complives=5;
function compchoice() {
  let choices = ["rock", "paper", "scissors"];
  let ran = Math.floor(Math.random() * 3);
  return choices[ran];
}



function decidewinner(computer, player) {
  if (computer == player) {
    return "draw";
  } else if (computer == "rock") {
    if (player == "paper") {
      return "player";
    } else {
      return "computer";
    }
  } else if (computer == "paper") {
    if (player == "scissors") {
      return "player";
    } else {
      return "computer";
    }
  } else {
    if (player == "rock") {
      return "player";
    } else {
      return "computer";
    }
  }
}

function game(player) {






  computer = compchoice();
  winner = decidewinner(computer, player);
  if (winner=='draw') {
    output = `Both players chose ${player} so it is a draw`;
  }
  else{
  output = `The player chose ${player} and the computer chose ${computer} so ${winner} wins this round`;
  if(winner=='computer'){
    lives=lives-1;
  }
  else{
    complives=complives-1

  }
 }
    


  lifedisplay.textContent = `player lives: ${lives} computer lives ${complives}`;
  textbox.textContent = output;


  if (lives==0){
    textbox.textContent='Player lost new game loaded'
    lives=5
    complives=5
    
}
else if (complives==0){
    textbox.textContent='Congrats you win a new game has loaded'
    lives=5
    complives=5
    
}



}

btnrock.addEventListener("click", function () {
  game("rock");
});
btnpaper.addEventListener("click", function () {
  game("paper");
});
btnscissors.addEventListener("click", function () {
  game("scissors");
});

}

main()