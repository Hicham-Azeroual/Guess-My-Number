'use strict';

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
 */

// create a function to create a rondom value between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No number!';
    displayMessage('⛔ No number!');
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
  } else if (guess > secretNumber) {
    // document.querySelector('.message').textContent = '📈 Too high!';
    displayMessage('📈 Too high!');
  } else if (guess < secretNumber) {
    // document.querySelector('.message').textContent = '📉 Too low!';
    displayMessage('📉 Too low!');
  }
});

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}


