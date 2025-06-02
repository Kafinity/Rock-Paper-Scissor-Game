let userScore = 0;
let compScore = 0;
let userWin =true;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#userScore");
let compScorePara = document.querySelector("#compScore");

const drawGame = ()=>{
  console.log("game is draw");
  msg.innerText ="Game is Draw";
  msg.style.backgroundColor = "#081b31";
}
const showWinner = (userWin,userChoice,compChoice) =>{
  if(userWin){
    console.log("you win");
    userScore++;
    userScorePara.innerText =userScore;
    msg.innerText= `You win.Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  }else{
    console.log("you lose");
    compScore++;
    compScorePara.innerText =compScore;
    msg.innerText= `You los${userChoice} beats your ${compChoice}`;
    msg.style.backgroundColor = "green";
    msg.style.backgroundColor ="red";
  }
}
const genCompChoice= ()=>{
  const  option = ["rock","paper","scissor"];
  const randIdx = Math.floor(Math.random()*3);
  return option[randIdx];
}

const playGame = (userChoice) =>{
  console.log("user choice ",userChoice);
  let compChoice =genCompChoice();
  console.log("comp choice ",compChoice);
  if(userChoice === compChoice){
    drawGame();
    return;
  }else{
    if(userChoice ==="rock"){
      // comp choice scissor,paper
      userWin = compChoice ==="scissor"?true:false;
    }else if(userChoice ==="paper"){
      // rock , scissor
      userWin = compChoice ==="rock"?true:false;
    }else{
      //scissor
      // rock paper
      userWin = compChoice==="paper"?true:false;
    }
    showWinner(userWin,userChoice,compChoice);
  }
}

choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
    
  })
})


