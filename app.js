let userScore =0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscore = document.querySelector("#userscore");
const compscore = document.querySelector("#compscore");

const genCompChoice = ()=>{
    const option = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() *3);
    console.log(option[randIdx]);
    return option[randIdx];
    
}

const drawGame = () =>{
   msg.innerText ="Game draw";
   msg.style.backgroundColor = "#081b31";
}

const showWinner = (userwin, userChoice, compChoice) => {
  if (userwin) {
    userScore++;
    userscore.innerText = userScore;
    msg.innerText = `you win ${userChoice} beat ${compChoice}`;
    msg.style.backgroundColor = "green";

    
  } else {
    compScore++;
    compscore.innerText = compScore;
    msg.innerText = `you loss ${compChoice} beat ${userChoice}`;
    msg.style.backgroundColor = "red";
    
  }
};

const playGame=(userChoice)=>{
  console.log(userChoice);
  const compChoice = genCompChoice();
if(userChoice == compChoice){
   drawGame(); 
}else{
    let userwin = true;
    if(userChoice == "rock"){
      userwin =  compChoice == "paper"? false:true;
    }else if(userChoice == "paper"){
        userwin = compChoice == "scissor"?false: true;
    }else{
        userwin = compChoice == "rock"?false:true;

    }

    showWinner(userwin,userChoice,compChoice);
}


}


choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
       console.log("choice was clicked", userChoice);
       playGame(userChoice);
    })
})