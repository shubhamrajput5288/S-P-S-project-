let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
    const options  = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3) ;
    return options[randidx];
};

const drawgame = () => {
    console.log("game was draw");
    msg.innerHTML = "Game was Draw. Play again/";
    msg.style.backgroundColor = "#081b31";
};

const showwinner = (userwin) => {
    if(userwin){
        // console.log("You win!");
        userscore++;
        userscorepara.innerHTML = userscore;
        msg.innerHTML = "You win!";
        msg.style.backgroundColor = "green";
    }else{
       // console.log("You loss");
        compscore++;
        compscorepara.innerHTML = compscore;
        msg.innerHTML = "You loss.";
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userchoice) => {
    console.log("user choice = " , userchoice);
    //generate computer choice
    const compchoice = gencompchoice();
    console.log("comp choice = ",compchoice);

    if(userchoice === compchoice){
        drawgame();
    }else {
        let userwin = true;
        if(userwin === "rock"){
            //scissor,paper
            userwin = compchoice === "paper" ? false : true ;
        }else if (userchoice === "paper"){
            //rock,scissor
            userwin = compchoice === "scissors" ? false : true ;
        }else{
            //rock,paper
            userwin = compchoice === "rock" ? false : true ;
        }
        showwinner(userwin);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        // console.log("choice was clicked" , choiceId);
        playgame(userchoice);
    })
})