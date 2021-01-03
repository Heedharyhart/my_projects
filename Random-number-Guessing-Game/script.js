'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'correct Number!';
//document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// h8;

let secretNum = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScores = 0;
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const check = document.querySelector('.check');

check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //When there is no input
  if (!guess) displayMessage('No number guess!!');
  //When the player wins
  else if (guess === secretNum) {
    displayMessage('Correct Number!!');
    document.querySelector('.number').textContent = secretNum;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('body').style.fontSize = '30rem';
    if (score > highScores) {
      highScores = score;
      document.querySelector('.highscore').textContent = highScores;
    }
    //When the guess is wrong
  } else if (guess !== secretNum) {
    if (score > 1) {
      displayMessage(guess > secretNum ? 'Too High!!' : 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!!');
      document.querySelector('.score').innerHTML = 0;
    }
  }

  //else if (guess > secretNum) {
  //     if (score > 1) {
  //       message.innerHTML = 'Too High!!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       message.innerHTML = 'You lost the game!!';
  //       document.querySelector('.score').innerHTML = 0;
  //     }

  //     //When the guess is too low
  //   } else if (guess < secretNum) {
  //     if (score > 1) {
  //       message.innerHTML = 'Too Low!!';
  //       score--;
  //       document.querySelector('.score').innerHTML = score;
  //     } else {
  //       message.innerHTML = 'You lost the game!!';
  //       document.querySelector('.score').innerHTML = 0;
  //     }
  //   }
});

const again = document.querySelector('.again');

again.addEventListener('click', function () {
  secretNum = Math.trunc(Math.random() * 20 + 1);
  let score = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('body').style.fontSize = '15rem';

  displayMessage('start guessing!!');
  //document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';
});
