let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");


const gencompchoice = () => {
      const option =["rock", "paper","scissors"];
      const randindx = Math.floor(Math.random() * 3);
      return option [randindx];
}
const drawgame = () => {
      msg.innerText = "game was draw! play again";
      msg.style.backgroundColor = "#081b31";
      
}
const showWinner = (userwin , userchoice , compchoice) => { 
      if (userwin) {
            userscore++;
            userscorepara.innerText = userscore;
            console.log("you win!");
      msg.innerText = `You Win! Youre ${userchoice} beats ${compchoice}`;
      msg.style.backgroundColor = "green";
      

            
      }else {
            compscore++;
            compscorepara.innerText = compscore;
      msg.innerText = `You Lose! ${compchoice} beats youre  ${userchoice}`;
      msg.style.backgroundColor = "red";
      

      }
};

const playgame = (userchoice) => {
      console.log("user choice=",userchoice);
      const compchoice = gencompchoice ();
      console.log("comp choice=",compchoice);

      if(userchoice === compchoice) {
         drawgame();
         } else {
            let userwin = true;
            if(userchoice === "rock") {
                  //scissors,paper
            userwin=compchoice === "paper" ? false : true; 
          } else if (userchoice === "paper") {
            //rock , scissors
            userwin = compchoice === "scissors" ? false : true;
          } else {
            //rock , paper
            userwin = compchoice === "rock" ? false : true;
          }
          showWinner(userwin,userchoice,compchoice);
         }
      }


choices.forEach((choice) => {
     
     choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id"); 
        playgame(userchoice);
     })
}) 
