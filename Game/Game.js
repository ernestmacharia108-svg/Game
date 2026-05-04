const choiceImages = {
    rock: 'https://cdn-icons-png.flaticon.com/512/4436/4436481.png',
    paper: 'https://cdn-icons-png.flaticon.com/512/3442/3442506.png',
    scissors: 'https://cdn-icons-png.flaticon.com/512/747/747376.png'
};

function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const compChoice = choices[Math.floor(Math.random() * 3)];
    let res = "";
    
    if (playerChoice === compChoice) res = "It's a tie!";
    else if ((playerChoice === 'rock' && compChoice === 'scissors') ||
             (playerChoice === 'paper' && compChoice === 'rock') ||
             (playerChoice === 'scissors' && compChoice === 'paper')) res = "You Win!";
    else res = "You Lose!";
    
    // Update player display
    document.getElementById('playerImg').src = choiceImages[playerChoice];
    document.getElementById('playerChoice').innerText = playerChoice;
    
    // Update AI display
    document.getElementById('aiImg').src = choiceImages[compChoice];
    document.getElementById('aiChoice').innerText = compChoice;
    
    // Update result
    document.getElementById('result').innerText = res;
}
