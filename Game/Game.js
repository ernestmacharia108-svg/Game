function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const compChoice = choices[Math.floor(Math.random() * 3)];
    let res = "";
    if (playerChoice === compChoice) res = "It's a tie!";
    else if ((playerChoice === 'rock' && compChoice === 'scissors') ||
             (playerChoice === 'paper' && compChoice === 'rock') ||
             (playerChoice === 'scissors' && compChoice === 'paper')) res = "You Win!";
    else res = "You Lose!";
    document.getElementById('result').innerText = `You: ${playerChoice} | AI: ${compChoice} -> ${res}`;
}
