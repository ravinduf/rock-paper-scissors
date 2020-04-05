let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock"; 
    if (letter === "p") return "Paper";
    else return "Scissor";
}
function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} . You win.. 😻🔥🎆 `
    document.getElementById(userChoice).classList.add(green-glow);
}

function lose(userChoice, computerChoice){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord} . You Lose.. 😅😅😅 `
}

function draw(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals to ${convertToWord(computerChoice)}${smallCompWord} . It's a draw `
}

function game(userChoice) {
   const computerChoice = getComputerChoice();
   switch (userChoice + computerChoice){
        case "rs": 
        case "sp": 
        case "pr":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "ps":
        case "rp":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
   }  
}

function main() {

    rock_div.addEventListener('click', () => game('r') );
    paper_div.addEventListener('click', () => game('p') );
    scissor_div.addEventListener('click', () => game('s') );

}

main();
