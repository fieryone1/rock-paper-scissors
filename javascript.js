

function compchoice() {
    choices=['rock','paper','scissors'];
    ran=Math.floor(Math.random()*3);
    return(choices[ran]);
}

function playerchoice(){
    let choice=prompt("Choose rock paper or scissors");
    while(choice !='rock'.toLowerCase() && choice!='paper'.toLowerCase() && choice!='scissors'.toLowerCase()){
        choice=prompt("choose rock paper or scissors correctly")
        
    }
    return(choice.toLowerCase());

}

function decidewinner(computer,player) {
    if (computer==player){
        return('it is a draw')
    }
    else if (computer=='rock'){
        if (player=='paper'){
            return('player wins')
        }
        else{
            return('computer wins')
        }
    }
    else if(computer=='paper'){
        if(player=='scissors'){
            return('player wins')
        }
        else{
            return('computer wins')
        }

    }
    else{
        if(player=='rock'){
            return('player wins')
        }
        else{
            return('computer wins' )
        }

    }


}


function game(){
   player=playerchoice()
   computer=compchoice()

   console.log('Player chose ', player," computer chose ", computer, " so ",decidewinner(computer,player))
    


}

game()