const ComputerPick = document.querySelector('#ComputerPick');
const rock = document.querySelector('#img1');
const paper = document.querySelector('#img2');
const scissors = document.querySelector('#img3');
const playerChoice = document.querySelector('.scorePlayer');
const reset = document.querySelector(".reset");
const images = document.querySelectorAll("img");

images.forEach(image => {
    image.addEventListener("click", () => {
        const audio = new Audio("tink.wav");
        audio.play();

        //hace el scale al tocar la img, fijarse en css img:active para que lo haga mas smooth
        image.style.transform = "scale(1.5)";
        setTimeout(() => {
            image.style.transform = "scale(1)";
        }, 200);
    });
});

rock.addEventListener('click', playerSelection);
paper.addEventListener('click', playerSelection);
scissors.addEventListener('click', playerSelection);


reset.addEventListener("click", function (){
    const playerScore= document.querySelector(".playerPoints");
    const computerScore = document.querySelector(".PcPoint");
    const ganador = document.querySelector(".win");
    const audio = new Audio("tink.wav");
    audio.play();


    //hace el scale al tocar el boton, fijarse en css button:active para que lo haga mas smooth
    reset.style.transform = "scale(1.2)";
    setTimeout(function() {
        reset.style.transform = "scale(1)";
    }, 200);

    playerScore.textContent = "0";
    computerScore.textContent = "0";
    ganador.textContent = "Partida a 5";
})

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0){
        ComputerPick.textContent = 'Computer picked rock';
        ComputerPick.style.backgroundColor = 'brown';
        return "rock";
    }
    else if(randomNumber === 1) {
        ComputerPick.textContent = 'Computer picked paper';
        ComputerPick.style.backgroundColor = 'brown';

        return "paper";
    }
    ComputerPick.textContent = 'Computer picked scissors';
    ComputerPick.style.backgroundColor = 'brown';

    return "scissors";


}

function playerSelection(event){
    let choice = event.target.alt;
    playerChoice.textContent = `Player picked ${choice}`;
    playerChoice.style.backgroundColor = "brown";

    winner(choice);
}

function winner(playerChoice){
    const playerScore = document.querySelector(".playerPoints");
    const computerScore = document.querySelector(".PcPoint");
    const ganador = document.querySelector(".win");


    let playerCount = Number(playerScore.textContent);
    let computerCount = Number(computerScore.textContent);
    let computerChoice = getComputerChoice();


    if (playerChoice === "rock"){
        if (computerChoice === "rock"){
            playerCount += 0;

        }
        else if(computerChoice === "paper"){
            computerCount += 1;
        }
        else if(computerChoice === "scissors"){
            playerCount += 1;
        }
    }

    else if (playerChoice === "paper"){
        if (computerChoice === "rock"){
            playerCount += 1;
        }
        else if (computerChoice === "paper"){
            computerCount += 0;
        }
        else if (computerChoice === "scissors"){
            computerCount += 1;
            playerCount += 0;
        }
    }

    else if (playerChoice === "scissors"){
        if (computerChoice === "rock"){
            computerCount += 1;
        }
        else if (computerChoice === "paper"){
            playerCount += 1;
        }
        else if (computerChoice === "scissors"){
            playerCount += 0;
        }
    }

    if (computerCount === 5){
        ganador.textContent = " La computadora ganó";
    }
    else if (playerCount === 5){
        ganador.textContent = " El jugador ganó";
    }

    playerScore.textContent = playerCount.toString();
    computerScore.textContent = computerCount.toString();


}




