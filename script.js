function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    const result = determineWinner(userChoice, computerChoice);

    displayResult(userChoice, computerChoice, result);
}

function determineWinner(user, computer) {
    if (user === computer) {
        return "IT'S A TIE!";
    } else if ((user === "rock" && computer === "scissors") ||
               (user === "paper" && computer === "rock") ||
               (user === "scissors" && computer === "paper")) {
        return "YOU WIN!";
    } else {
        return "COMPUTER WINS!";
    }
}

function displayRules() {
    const rulesElement = document.getElementById("rules");
    rulesElement.innerHTML = `
        <h2>Rules of the Game:</h2> 
        <P>Player is to pick one between Rock, Paper & scissors</P>
        <p>Rock beats Scissors</p>
        <p>Scissors beats Paper</p>
        <p>Paper beats Rock</p>
    `;
}

function displayResult(user, computer, result) {
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `
        <p>Your choice: ${user}</p>
        <p>Computer's choice: ${computer}</p>
        <p>${result}</p>
    `;
    
}

