//console.log("Hey Working");
function getComputerChoice(){
    let computerGuess=Math.floor(Math.random()*3);
    //Math.random() Generates random Number between 0 to 1(exclusive)
    if(computerGuess===0){
        return "rock";
    } 
    else if(computerGuess===1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanChoice(){
    let HumanChoice=prompt("Enter your chosen weapon");
    return HumanChoice;
 }



let playGame=()=>{
    let humanScore=0,computerScore=0;

    
function playRound(humanChoice,computerChoice){ 
    humanChoice=humanChoice.toLowerCase();
    if(humanChoice===computerChoice){
        console.log("its a tie");
    }
    else if((humanChoice==="paper" && computerChoice==="rock") ||
           (humanChoice==="rock" && computerChoice==="scissors")||
           (humanChoice==="scissors" && computerChoice==="paper"))
    {
        humanScore++;
        console.log(`Your Choice is ${humanChoice}\nComputer chose ${computerChoice}\nYour score : ${humanScore}`)
         
    }
    else{
        computerScore++;
        console.log(`Your Choice is ${humanChoice}\nComputer chose ${computerChoice}\nComputer scored: ${computerScore}`);
     }
}

for(let i=0;i<5;i++){
    let humanSelection=getHumanChoice();
    let computerSelection=getComputerChoice()
    playRound(humanSelection,computerSelection);
}

if(humanScore>computerScore){
    return ( `You Won \n your score is: ${humanScore}`);
}
else if(humanScore<computerScore){
    return ("You lose!");
}
else{
    return ("It's a tie");
}
};


console.log(playGame());