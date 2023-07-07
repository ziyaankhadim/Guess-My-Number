'use strict';
let guessNumber = Math.trunc(Math.random() * 20 + 1);
//console.log(guessNumber);
let score = Number(document.querySelector('.score').textContent);
document.querySelector('.again').addEventListener('click', function () {
  guessNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
});
document.querySelector('.check').addEventListener('click', function () {
  let userGuess = Number(document.querySelector('.guess').value);
  score--;
  // console.log(score);
  // console.log(userGuess, typeof userGuess);
  if (score > 0) {
    document.querySelector('.score').textContent = score;
    if (!userGuess) {
      document.querySelector('.message').textContent = '🚫 No Number';
    } else if (userGuess === guessNumber) {
      document.querySelector('.message').textContent =
        '🎉 Congrats! You Won 🎊';
      document.querySelector('.number').textContent = guessNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      const highScore = document.querySelector('.highscore').textContent;
      if (score > highScore)
        document.querySelector('.highscore').textContent = score;
    } else if (userGuess < guessNumber) {
      document.querySelector('.message').textContent = '👇Too Low ';
    } else if (userGuess > guessNumber) {
      document.querySelector('.message').textContent = '👆Too High ';
    }
  } else {
    document.querySelector('.score').textContent = 0;
    document.querySelector('.message').textContent = '💀 You Lost ';
    document.querySelector('.number').textContent = guessNumber;
    document.querySelector('body').style.backgroundColor = 'red';
  }
});
